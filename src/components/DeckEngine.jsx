import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SideNav from './SideNav'
import NavArrows from './NavArrows'
import { slides } from '../data/deckData'

// Import all slides
import HeroSlide from '../slides/HeroSlide'
import WhySlide from '../slides/WhySlide'
import RetailSlide from '../slides/RetailSlide'
import EntertainmentSlide from '../slides/EntertainmentSlide'
import EventsSlide from '../slides/EventsSlide'
import SponsorshipSlide from '../slides/SponsorshipSlide'

// Map slide index to component
const slideComponents = [
  HeroSlide,
  WhySlide,
  RetailSlide,
  EntertainmentSlide,
  EventsSlide,
  SponsorshipSlide,
]

export default function DeckEngine() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  // Go to next slide
  const next = () => {
    if (current < slides.length - 1) {
      setDirection(1)
      setCurrent(current + 1)
    }
  }

  // Go to previous slide
  const prev = () => {
    if (current > 0) {
      setDirection(-1)
      setCurrent(current - 1)
    }
  }

  // Jump to any slide from side nav
  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next()
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  // Animation variants
  const variants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  }

  const CurrentSlide = slideComponents[current]

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* Side Navigation */}
      <SideNav
        current={current}
        goTo={goTo}
        slides={slides}
      />

      {/* Slide Area */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <CurrentSlide goTo={goTo} next={next} />
        </motion.div>
      </AnimatePresence>

      {/* Arrow Navigation */}
      <NavArrows
        current={current}
        total={slides.length}
        next={next}
        prev={prev}
      />

      {/* Slide counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-6 h-1.5 bg-gold'
                : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

    </div>
  )
}