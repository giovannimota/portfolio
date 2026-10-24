import React, { CSSProperties, useEffect } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const ScrollReveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => (
  <div
    className={className}
    data-scroll-reveal
    style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
  >
    {children}
  </div>
)

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const root = document.documentElement
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasCssTimeline = window.CSS?.supports?.('animation-timeline: view()') ?? false
    if (reducedMotion || hasCssTimeline || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })

    document.querySelectorAll<HTMLElement>('[data-scroll-reveal]').forEach(element => observer.observe(element))
    root.classList.add('reveal-observer')
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-observer')
    }
  }, [])

  return <>{children}</>
}
