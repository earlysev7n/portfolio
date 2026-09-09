import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import './LogoLoop.css'

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 }

function useResizeObserver(callback, containerRef, sequenceRef, dependencies) {
  useEffect(() => {
    const elements = [containerRef.current, sequenceRef.current].filter(Boolean)

    if (!window.ResizeObserver) {
      window.addEventListener('resize', callback)
      callback()
      return () => window.removeEventListener('resize', callback)
    }

    const observer = new ResizeObserver(callback)
    elements.forEach((element) => observer.observe(element))
    callback()

    return () => observer.disconnect()
  }, [callback, containerRef, sequenceRef, dependencies])
}

function useImageLoader(sequenceRef, onLoad, dependencies) {
  useEffect(() => {
    const images = sequenceRef.current?.querySelectorAll('img') ?? []

    if (images.length === 0) {
      onLoad()
      return undefined
    }

    let remainingImages = images.length
    const handleImageLoad = () => {
      remainingImages -= 1
      if (remainingImages === 0) onLoad()
    }

    images.forEach((image) => {
      if (image.complete) handleImageLoad()
      else {
        image.addEventListener('load', handleImageLoad, { once: true })
        image.addEventListener('error', handleImageLoad, { once: true })
      }
    })

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleImageLoad)
        image.removeEventListener('error', handleImageLoad)
      })
    }
  }, [onLoad, sequenceRef, dependencies])
}

function useAnimationLoop(
  trackRef,
  targetVelocity,
  sequenceWidth,
  isHovered,
  hoverSpeed,
) {
  const animationRef = useRef(null)
  const lastTimestampRef = useRef(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    if (sequenceWidth > 0) {
      offsetRef.current =
        ((offsetRef.current % sequenceWidth) + sequenceWidth) % sequenceWidth
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000
      lastTimestampRef.current = timestamp
      const target = isHovered ? hoverSpeed : targetVelocity
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU)

      velocityRef.current += (target - velocityRef.current) * easingFactor

      if (sequenceWidth > 0) {
        const nextOffset = offsetRef.current + velocityRef.current * deltaTime
        offsetRef.current = ((nextOffset % sequenceWidth) + sequenceWidth) % sequenceWidth
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
      animationRef.current = null
      lastTimestampRef.current = null
    }
  }, [hoverSpeed, isHovered, sequenceWidth, targetVelocity, trackRef])
}

const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0,
  fadeOut = false,
  scaleOnHover = false,
  ariaLabel = 'Technology logos',
  className = '',
}) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const sequenceRef = useRef(null)
  const [sequenceWidth, setSequenceWidth] = useState(0)
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES)
  const [isHovered, setIsHovered] = useState(false)

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0
    const width = sequenceRef.current?.getBoundingClientRect().width ?? 0

    if (width > 0) {
      const roundedWidth = Math.ceil(width)
      setSequenceWidth(roundedWidth)
      setCopyCount(
        Math.max(
          ANIMATION_CONFIG.MIN_COPIES,
          Math.ceil(containerWidth / roundedWidth) + ANIMATION_CONFIG.COPY_HEADROOM,
        ),
      )
    }
  }, [])

  useResizeObserver(updateDimensions, containerRef, sequenceRef, [
    logos,
    gap,
    logoHeight,
  ])
  useImageLoader(sequenceRef, updateDimensions, [logos, gap, logoHeight])

  const velocity = useMemo(
    () => Math.abs(speed) * (direction === 'right' ? -1 : 1) * (speed < 0 ? -1 : 1),
    [direction, speed],
  )

  useAnimationLoop(trackRef, velocity, sequenceWidth, isHovered, hoverSpeed)

  const rootClassName = [
    'logoloop',
    fadeOut && 'logoloop--fade',
    scaleOnHover && 'logoloop--scale-hover',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={containerRef}
      className={rootClassName}
      style={{
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logo-height': `${logoHeight}px`,
      }}
      role="region"
      aria-label={ariaLabel}
    >
      <div
        className="logoloop__track"
        ref={trackRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="logoloop__list"
            key={`copy-${copyIndex}`}
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? sequenceRef : undefined}
          >
            {logos.map((item, itemIndex) => (
              <li
                className="logoloop__item"
                key={`${copyIndex}-${item.title ?? itemIndex}`}
                title={item.title}
              >
                <span className="logoloop__node">{item.node}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
})

export default LogoLoop
