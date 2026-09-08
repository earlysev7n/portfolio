import { useEffect, useRef, useState } from 'react'

function Reveal({
  children,
  className = '',
  delay = 0,
  as: Element = 'div',
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.12,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const classes = [
    'reveal',
    isVisible && 'is-visible',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Element
      ref={elementRef}
      className={classes}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Element>
  )
}

export default Reveal