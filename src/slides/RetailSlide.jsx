import { motion } from 'framer-motion'
import { retailers, luxuryBrands } from '../data/deckData'

export default function RetailSlide({ next }) {
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

        {/* Left — content */}
        <div className="w-1/2 flex flex-col justify-center pl-20 pr-8">

          <motion.p
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Retail Leasing
          </motion.p>

          <motion.h2
            className="font-display text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A Global Retail
            <br />
            <span className="text-gold">Destination</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Join 520+ world-class retailers across fashion,
            tech, dining, beauty, and lifestyle. Every brand
            finds its home at Mall of America.
          </motion.p>

          {/* Retailer grid with logos */}
          <motion.div
            className="grid grid-cols-4 gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {retailers.map((r) => (
              <div
                key={r.name}
                className="border border-white/10 p-3 flex flex-col items-center justify-center gap-2 hover:border-gold/50 transition-colors duration-300 group"
              >
                <img
                  src={r.logo}
                  alt={r.name}
                  className="w-10 h-8 object-contain filter invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => e.target.style.display = 'none'}
                />
                <p className="text-white/60 text-xs font-semibold group-hover:text-gold transition-colors duration-300 text-center">
                  {r.name}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Luxury brands — elegant text tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-white/30 text-xs tracking-widest uppercase mb-3">
              Luxury Wing
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {luxuryBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 border border-gold/30 text-gold/70 text-xs tracking-[0.2em] uppercase hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300 cursor-default font-display"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.button
            onClick={next}
            className="self-start px-8 py-3 bg-gold text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Explore Leasing Options
          </motion.button>

        </div>

        {/* Right — image + leasing paths */}
        <div className="w-1/2 flex flex-col">

          {/* Top image */}
          <motion.div
            className="h-1/2 relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/retail.jpg"
              alt="Retail"
              className="w-full h-full object-cover"
              onError={(e) => {
             e.target.src = "https://moaapi.net/sites/default/files/2023-03/armani-exchange-storefront.jpg"
            
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </motion.div>

          {/* Bottom — leasing paths */}
          <motion.div
            className="h-1/2 grid grid-cols-2 gap-px bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { type: "Flagship Store",  sqft: "5,000–25,000 sq ft" },
              { type: "Luxury Boutique", sqft: "1,000–5,000 sq ft" },
              { type: "Pop-Up Space",    sqft: "200–2,000 sq ft" },
              { type: "F&B Concept",     sqft: "500–8,000 sq ft" },
            ].map((path) => (
              <div
                key={path.type}
                className="bg-zinc-950 p-4 flex flex-col justify-center hover:bg-zinc-900 transition-colors duration-300 group"
              >
                <p className="text-gold text-xs tracking-widest uppercase mb-1">
                  {path.sqft}
                </p>
                <p className="text-white text-sm font-semibold group-hover:text-gold transition-colors duration-300">
                  {path.type}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

    </div>
  )
}