/** 1 troy ounce in grams (fine gold) */
export const TROY_OZ_GRAMS = 31.1034768

function coingeckoSimplePriceUrl() {
  const path = '/simple/price?ids=pax-gold&vs_currencies=inr'
  if (import.meta.env.DEV) {
    return `/api/coingecko${path}`
  }
  return `https://api.coingecko.com/api/v3${path}`
}

/**
 * Indicative 24K spot: PAXG tracks ~1 oz LBMA gold; we convert to INR/gram.
 * @returns {{ inrPerGram24k: number, inrPerGram22k: number } | null}
 */
export async function fetchIndicativeGoldInrPerGram() {
  const res = await fetch(coingeckoSimplePriceUrl(), {
    headers: { Accept: 'application/json' },
  })
  if (!res.ok) {
    throw new Error(`Gold rate request failed (${res.status})`)
  }
  const data = await res.json()
  const inrPerOz = data?.['pax-gold']?.inr
  if (typeof inrPerOz !== 'number' || !Number.isFinite(inrPerOz) || inrPerOz <= 0) {
    throw new Error('Unexpected gold rate response')
  }
  const inrPerGram24k = inrPerOz / TROY_OZ_GRAMS
  const inrPerGram22k = inrPerGram24k * (22 / 24)
  return { inrPerGram24k, inrPerGram22k }
}

export function formatInrPerGram(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.round(value))
}
