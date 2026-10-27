import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const options = [
  { value: "light", label: "Terang", Icon: FaSun },
  { value: "dark", label: "Gelap", Icon: FaMoon },
  { value: "system", label: "Sistem", Icon: FaDesktop },
];

export default function ThemeToggle({ mode, setMode, showLabel = false }) {
  return (
    <div
      role="group"
      aria-label="Pilih tampilan"
      className={`flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50/70 p-1 ${
        showLabel ? "w-full" : ""
      }`}
    >
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
            className={`flex items-center justify-center gap-2 rounded-full text-xs font-extrabold transition ${
              showLabel ? "h-9 flex-1" : "h-8 w-8"
            } ${
              active
                ? "bg-[#024C99] text-white shadow-sm"
                : "text-slate-500 hover:text-[#024C99]"
            }`}
          >
            <Icon aria-hidden="true" className="text-sm" />
            {showLabel && <span>{label}</span>}
          </button>
        );
      })}
    </div>
  );
}
