// Configuration — change BOT_LINK before deployment
export const CONFIG = {
  BOT_LINK: "https://t.me/lavka_courier_auth_bot?start=",
  GA4_MEASUREMENT_ID: "G-XXXXXXXXXX",
  YANDEX_METRIKA_ID: "XXXXXXXX",
  DEFAULT_UTM_SOURCE: "pub",
  CONTACT_EMAIL: "placeholder@example.com",
};

/**
 * Get the bot link with UTM source appended.
 * Reads ?utm_source from URL params, falls back to DEFAULT_UTM_SOURCE.
 */
export function getBotLink(customSource?: string): string {
  const params = new URLSearchParams(window.location.search);
  const source = customSource || params.get("utm_source") || params.get("start") || CONFIG.DEFAULT_UTM_SOURCE;
  return `${CONFIG.BOT_LINK}${source}`;
}

export function getBotLinkCard(): string {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source") || params.get("start") || CONFIG.DEFAULT_UTM_SOURCE;
  return `${CONFIG.BOT_LINK}card_${source}`;
}
