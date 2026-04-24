import { motion } from 'framer-motion'

export default function HeroSlide({ next }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <motion.p
          className="text-gold text-xs tracking-[0.45em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bloomington, Minnesota · Est. 1992
        </motion.p>

        <motion.h1
          className="font-display text-7xl md:text-9xl font-bold text-white leading-none mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Mall of<br />
          <span className="text-gold">America</span>
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          The most visited destination in the United States.
          <br />40 million reasons to be here.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button
            onClick={next}
            className="px-10 py-4 bg-gold text-black text-xs font-semibold tracking-[0.25em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Explore the Opportunity
          </button>
          <button
            onClick={next}
            className="px-10 py-4 border border-white/40 text-white text-xs font-semibold tracking-[0.25em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Watch the Deck
          </button>
        </motion.div>
      </div>

      {/* MOA Logo top left */}
      <div className="absolute top-6 right-8 z-20">
        <p className="font-display text-2xl font-bold text-white tracking-widest">
          MOA<span className="text-gold">·</span>
        </p>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Next</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

    </div>
  )
}