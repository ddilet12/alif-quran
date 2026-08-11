// Centralized contact info — change here once, applies everywhere.
export const PHONE_DISPLAY = "+7 747 927 2864";
export const PHONE_RAW = "77479272864";
export const WHATSAPP_URL = `https://wa.me/${PHONE_RAW}`;
export const TELEGRAM_URL = "https://t.me/aliftoquran";
export const TEL_HREF = `tel:+${PHONE_RAW}`;

export const waLink = (text?: string) =>
  text ? `${WHATSAPP_URL}?text=${encodeURIComponent(text)}` : WHATSAPP_URL;
