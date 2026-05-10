const STEPS = [
  { num: 1, label: "Elegí el modelo" },
  { num: 2, label: "Elegí los colores" },
  { num: 3, label: "Agregá el texto" },
  { num: 4, label: "Descargalo" },
];

export default function StepNav({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 py-6 overflow-x-auto">
      {STEPS.map((step, i) => (
        <div key={step.num} className="flex items-center gap-2 shrink-0">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors ${
                step.num < current
                  ? "bg-brand-red border-brand-red"
                  : step.num === current
                  ? "bg-brand-red border-brand-red"
                  : "bg-transparent border-black/20"
              }`}
            >
              {step.num < current ? (
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <span
                  className={`font-bebas text-lg leading-none ${
                    step.num === current ? "text-white" : "text-black/30"
                  }`}
                >
                  {step.num}
                </span>
              )}
            </div>
            <span
              className={`font-inter text-xs hidden md:block ${
                step.num === current ? "text-brand-red font-semibold" : "text-black/40"
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div
              className={`w-8 md:w-16 h-0.5 mb-5 shrink-0 ${
                step.num < current ? "bg-brand-red" : "bg-black/10"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
