import { useRef } from 'react'
import './SpotlightCard.css'

function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'var(--card-spotlight-color)',
  as: Component = 'div',
  onMouseMove,
  ...props
}) {
  const cardRef = useRef(null)

  function handleMouseMove(event) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    cardRef.current.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    cardRef.current.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
    cardRef.current.style.setProperty('--spotlight-color', spotlightColor)
    onMouseMove?.(event)
  }

  return (
    <Component
      ref={cardRef}
      className={`card-spotlight ${className}`.trim()}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </Component>
  )
}

export default SpotlightCard
