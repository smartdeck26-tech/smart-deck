export const nomorwa = "6285166817961";

export const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyMvMt-PiMvLr3wWvLs-klpbh7s5PA0njzFX4JsPFdCkbyqpHQjO-7QTZmVYLQcy5Es/exec";

export const waLink = (text = "Halo SmartDeck, saya ingin konsultasi gratis.") =>
  `https://wa.me/${nomorwa}?text=${encodeURIComponent(text)}`;
