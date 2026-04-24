import { motion } from 'framer-motion'
import { eventTypes } from '../data/deckData'

export default function EventsSlide({ next }) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      {/* MOA Logo */}
      <div className="absolute top-6 right-8 z-20">
        <p className="font-display text-2xl font-bold text-white tracking-widest">
          MOA<span className="text-gold">·</span>
        </p>
      </div>

      {/* Main layout */}
      <div className="flex h-full">

        {/* Left — full image */}
        <motion.div
          className="w-1/2 relative overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://mallofamerica.com/sites/default/files/2025-02/mellodeath%20web%20photo%201.jpg"
            alt="Events at MOA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />

          {/* Stats on image */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "400+", label: "Events Per Year" },
                { value: "2,000+", label: "Event Capacity" },
                { value: "40M+", label: "Annual Visitors" },
                { value: "4", label: "Dedicated Venues" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-black/60 backdrop-blur-sm border border-white/10 p-3"
                >
                  <p className="font-display text-2xl font-bold text-gold">
                    {s.value}
                  </p>
                  <p className="text-white/50 text-xs tracking-wider uppercase mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — content */}
        <div className="w-1/2 flex flex-col justify-center px-10">

          <motion.p
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Events & Venue Booking
          </motion.p>

          <motion.h2
            className="font-display text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A Global Stage for
            <br />
            <span className="text-gold">Brands & Events</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            From large-scale concerts to high-impact brand
            activations — Mall of America offers unmatched
            visibility to 40 million visitors annually.
          </motion.p>

          {/* Event types */}
          <motion.div
            className="space-y-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {eventTypes.map((e, i) => (
              <motion.div
                key={e.name}
                className="flex items-center gap-4 border border-white/10 p-3 hover:border-gold/40 transition-colors duration-300 group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className="text-2xl flex-shrink-0">{e.icon}</span>
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-gold transition-colors duration-300">
                    {e.name}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Past events */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-white/30 text-xs tracking-widest uppercase mb-3">
              Past Highlights
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Nike Air Max Day",
                "Marvel Experience",
                "Taylor Swift Event",
                "Disney Pop-Up",
                "Fortune 500 Summit",
              ].map((event) => (
                <span
                  key={event}
                  className="px-3 py-1 border border-white/10 text-white/50 text-xs hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  {event}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            
             <a href="mailto:events@mallofamerica.com"
              className="px-6 py-3 bg-gold text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Book an Event
            </a>
            <button
              onClick={next}
              className="px-6 py-3 border border-white/30 text-white text-xs font-semibold tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              Explore Partnerships
            </button>
          </motion.div>

        </div>
      </div>

    </div>
  )
}