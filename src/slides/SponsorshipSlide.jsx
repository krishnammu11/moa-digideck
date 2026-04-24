import { motion } from 'framer-motion'
import { sponsorshipTiers } from '../data/deckData'

export default function SponsorshipSlide() {
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

        {/* Left — content */}
        <div className="w-1/2 flex flex-col justify-center px-10">

          <motion.p
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Brand Partnerships
          </motion.p>

          <motion.h2
            className="font-display text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Sponsor America's
            <br />
            <span className="text-gold">Most Visited Destination</span>
          </motion.h2>

          <motion.p
            className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Reach 40 million engaged visitors annually through
            integrated sponsorship programs built for maximum
            brand impact.
          </motion.p>

          {/* Audience stats */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { value: "40M+",  label: "Annual Visitors" },
              { value: "3.2hrs", label: "Avg Dwell Time" },
              { value: "90+",   label: "Countries" },
              { value: "$75K+", label: "Median Income" },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-white/10 p-4 hover:border-gold/50 transition-colors duration-300"
              >
                <p className="font-display text-3xl font-bold text-gold">
                  {s.value}
                </p>
                <p className="text-white/40 text-xs tracking-widest uppercase mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Activation zones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-white/30 text-xs tracking-widest uppercase mb-3">
              Activation Zones
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "🏛️ Main Rotunda",
                "🎡 Theme Park Entry",
                "💎 Luxury Wing",
                "📺 Digital Network",
                "🎤 Event Spaces",
                "🍽️ Food Court",
              ].map((zone) => (
                <span
                  key={zone}
                  className="px-3 py-1 border border-white/10 text-white/50 text-xs hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  {zone}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.a
            href="mailto:sponsors@mallofamerica.com"
            className="self-start px-8 py-3 bg-gold text-black text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Contact Our Partnerships Team
          </motion.a>

        </div>

        {/* Right — sponsorship tiers */}
        <div className="w-1/2 flex flex-col justify-center px-8 gap-4">

          <motion.p
            className="text-white/30 text-xs tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Partnership Tiers
          </motion.p>

          {sponsorshipTiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              className="border p-6 flex items-center justify-between group hover:bg-white/5 transition-colors duration-300"
              style={{ borderColor: tier.color + '44' }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
            >
              <div className="flex-1">
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-1 font-medium"
                  style={{ color: tier.color }}
                >
                  {tier.tier}
                </p>
                <p className="font-display text-3xl font-bold text-white">
                  {tier.price}
                </p>
                <p className="text-white/30 text-xs mt-1">per year</p>
              </div>

              {/* Perks */}
              <div className="flex-1 pl-6 border-l border-white/10">
                <ul className="space-y-1">
                  {tier.perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-2 text-xs text-white/50"
                    >
                      <span style={{ color: tier.color }} className="flex-shrink-0">
                        ✓
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pl-6">
                
                 <a href="mailto:sponsors@mallofamerica.com"
                  className="block px-4 py-2 text-xs font-semibold tracking-wider uppercase text-center transition-opacity duration-300 hover:opacity-80 whitespace-nowrap"
                  style={{ background: tier.color, color: '#000' }}
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          ))}

          {/* Final message */}
          <motion.div
            className="border border-white/10 p-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-white/40 text-xs leading-relaxed">
              Custom partnership programs available for all brand
              sizes and budgets. Our team will design a program
              around your goals.
            </p>
            <p className="text-gold text-xs mt-2 tracking-wider">
              sponsors@mallofamerica.com
            </p>
          </motion.div>

        </div>
      </div>

    </div>
  )
}