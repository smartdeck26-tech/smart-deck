export const nomorwa = "6285166817961";

export const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzlGs5eD_SF4bfZeIq1RrUJwJaO2DAKiKTTgv2caHBmZuyawdz5DUXQ4LSw5Z7vJpHtMA/exec";

export const waLink = (text = "Halo SmartDeck, saya ingin konsultasi gratis.") =>
  `https://wa.me/${nomorwa}?text=${encodeURIComponent(text)}`;
