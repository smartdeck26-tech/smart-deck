import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const options = [
  { value: "light", label: "Terang", Icon: FaSun },
  { value: "dark", label: "Gelap", Icon: FaMoon },
  { value: "system", label: "Sistem", Icon: FaDesktop },
];

// size "sm" = ringkas untuk navbar mobile (sebelah hamburger).
export default function ThemeToggle({
  mode,
  setMode,
  showLabel = false,
  size = "md",
}) {
  const small = size === "sm";
  const index = Math.max(
    0,
    options.findIndex((o) => o.value === mode)
  );

  return (
    <div
      role="group"
      aria-label="Pilih tampilan"
      className={`rounded-full border border-blue-100 bg-blue-50/70 ${
        small ? "p-0.5" : "p-1"
      } ${showLabel ? "w-full" : ""}`}
    >
      <div className="relative grid grid-cols-3">
        {/* Penanda aktif: bergeser halus antar opsi */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/3 transition-transform duration-500 ease-[cubic-bezier(0.34,1.3,0.64,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(${index * 100}%)` }}
        >
          <span className="block h-full w-full rounded-full bg-[#024C99] shadow-sm" />
        </span>

        {options.map(({ value, label, Icon }) => {
          const active = mode === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setMode(value)}
              aria-pressed={active}
              aria-label={`Tampilan ${label}`}
              title={label}
              className={`relative z-10 flex items-center justify-center gap-2 rounded-full font-extrabold transition-colors duration-300 ${
                small ? "h-6 w-6 text-[11px]" : "h-8 w-8 text-xs"
              } ${showLabel ? "h-9 w-auto flex-1" : ""} ${
                active ? "text-white" : "text-slate-500 hover:text-[#024C99]"
              }`}
            >
              <Icon
                aria-hidden="true"
                className={`transition-transform duration-300 ${
                  small ? "text-[11px]" : "text-sm"
                } ${active ? "scale-110" : "scale-100"}`}
              />
              {showLabel && <span>{label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}