import { motion } from 'framer-motion'
import { stats } from '../data/deckData'

export default function WhySlide({ next }) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">

      {/* MOA Logo */}
      <div className="absolute top-6 right-8 z-20">
        <p className="font-display text-2xl font-bold text-white tracking-widest">
          MOA<span className="text-gold">·</span>
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-1 h-full">

        {/* Left — full image */}
        <motion.div
          className="w-1/2 relative overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/why-moa.png"
            alt="Mall of America"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />

          {/* Gold badge */}
          <div className="absolute bottom-12 left-8 bg-gold p-5">
            <p className="font-display text-3xl font-bold text-black">$2B+</p>
            <p className="text-black/60 text-xs uppercase tracking-wider mt-1">
              Annual Economic Impact
            </p>
          </div>
        </motion.div>

        {/* Right — content */}
        <div className="w-1/2 flex flex-col justify-center px-12">

          <motion.p
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The Opportunity
          </motion.p>

          <motion.h2
            className="font-display text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Why Mall of
            <br />
            <span className="text-gold">America?</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A global destination combining retail, entertainment,
            and unmatched visitor engagement. No other property
            in North America comes close.
          </motion.p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="border border-white/10 p-4 hover:border-gold/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <p className="font-display text-3xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Demographics */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: "Visitors from out of state", value: "40%" },
              { label: "International visitors",     value: "11M / year" },
              { label: "Average visit duration",     value: "3+ hours" },
              { label: "Median household income",    value: "$75,000+" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center border-b border-white/10 pb-3"
              >
                <span className="text-white/40 text-xs">{item.label}</span>
                <span className="text-gold text-xs font-semibold">{item.value}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.button
            onClick={next}
            className="mt-8 self-start px-8 py-3 bg-gold text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Explore Retail Opportunities
          </motion.button>

        </div>
      </div>

    </div>
  )
}