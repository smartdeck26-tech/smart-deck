export default function Brand({ light = false }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-3 font-extrabold tracking-tight ${
        light ? "text-white" : "text-[#024C99]"
      }`}
    >
      <img
        src="/logo.png"
        className="h-auto w-40"
        alt="Logo SmartDeck"
      />
    </a>
  );
}