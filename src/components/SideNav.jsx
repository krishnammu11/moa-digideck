export default function SideNav({ current, goTo, slides }) {
  return (
    <div className="absolute left-0 top-0 h-full z-50 flex flex-col justify-center">
      <div className="flex flex-col gap-3 pl-3">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => goTo(slide.id)}
            title={slide.label}
            className="flex items-center gap-2 group"
          >
            {/* Dot only — no text */}
            <div className={`rounded-full transition-all duration-300 flex-shrink-0 ${
              current === slide.id
                ? 'w-2.5 h-2.5 bg-gold'
                : 'w-1.5 h-1.5 bg-white/30 group-hover:bg-white/70'
            }`} />
          </button>
        ))}
      </div>
    </div>
  )
}