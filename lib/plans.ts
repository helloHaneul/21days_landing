export const FREE_LIMITS = {
  children: 2,
  guardiansPerChild: 2,
  routinesPerChild: 3,
} as const;

export const PRO_LIMITS = {
  children: 5,
  guardiansPerChild: 6,
  routinesPerChild: 20,
} as const;

export const PRO_US_PRICES = {
  monthly: "US$1.99",
  annual: "US$19.99",
} as const;
