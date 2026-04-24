import { motion } from 'framer-motion'
import { attractions } from '../data/deckData'

export default function EntertainmentSlide({ next }) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      {/* MOA Logo */}
      <div className="absolute top-6 right-8 z-20">
        <p className="font-display text-2xl font-bold text-white tracking-widest">
          MOA<span className="text-gold">·</span>
        </p>
      </div>

      {/* Top header */}
      <div className="px-20 pt-12 pb-6">
        <motion.p
          className="text-gold text-xs tracking-[0.4em] uppercase mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Attractions & Entertainment
        </motion.p>
        <motion.h2
          className="font-display text-5xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Entertainment That
          <span className="text-gold"> Drives Traffic</span>
        </motion.h2>
      </div>

      {/* Three attraction cards */}
      <div className="grid grid-cols-3 h-64 px-20 gap-4">
        {attractions.map((a, i) => (
          <motion.div
            key={a.name}
            className="relative overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
          >
            <img
              src={a.image}
              alt={a.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="text-gold text-xs tracking-widest uppercase">
                {a.stat}
              </span>
              <h3 className="font-display text-lg font-bold text-white mt-1">
                {a.name}
              </h3>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">
                {a.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom strip — dining + stats */}
      <div className="grid grid-cols-2 px-20 mt-4 gap-4">

        {/* Dining */}
        <motion.div
          className="flex gap-6 items-center border border-white/10 p-5 hover:border-gold/40 transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
            alt="Dining"
            className="w-24 h-20 object-cover flex-shrink-0"
          />
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-1">
              Dining & Lifestyle
            </p>
            <h3 className="font-display text-xl font-bold text-white mb-1">
              Dining as a Destination
            </h3>
            <p className="text-white/50 text-xs leading-relaxed">
              50+ restaurants, 4.2M dining visits per year,
              average 2.5hr dwell time.
            </p>
          </div>
        </motion.div>

        {/* Business case stats */}
        <motion.div
          className="grid grid-cols-3 gap-px bg-white/5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { value: "40%",    label: "More foot traffic near attractions" },
            { value: "3+ hrs", label: "Average dwell time" },
            { value: "2x",     label: "Repeat visit rate" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-zinc-950 p-4 text-center flex flex-col justify-center"
            >
              <p className="font-display text-2xl font-bold text-gold mb-1">
                {s.value}
              </p>
              <p className="text-white/40 text-xs leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* CTA */}
      <motion.div
        className="px-20 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={next}
          className="px-8 py-3 bg-gold text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
        >
          Explore Event Opportunities
        </button>
      </motion.div>

    </div>
  )
}