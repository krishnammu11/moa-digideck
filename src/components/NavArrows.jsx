export default function NavArrows({ current, total, next, prev }) {
  return (
    <div className="absolute right-6 bottom-6 z-50 flex items-center gap-3">

      {/* Slide number */}
      <span className="text-white/30 text-xs tracking-widest">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      {/* Prev button */}
      <button
        onClick={prev}
        disabled={current === 0}
        className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
          current === 0
            ? 'border-white/10 text-white/20 cursor-not-allowed'
            : 'border-white/30 text-white hover:border-gold hover:text-gold'
        }`}
      >
        ←
      </button>

      {/* Next button */}
      <button
        onClick={next}
        disabled={current === total - 1}
        className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${
          current === total - 1
            ? 'border-white/10 text-white/20 cursor-not-allowed'
            : 'border-gold bg-gold text-black hover:bg-gold-light'
        }`}
      >
        →
      </button>

    </div>
  )
}