/* some general utilities */

export const vmap = (value, start1, stop1, start2, stop2) => {
  const r = (value - start1) / (stop1 - start1)
  return start2 + r * (stop2 - start2)
}

export const vcap = (value, min, max) => Math.max(min, Math.min(max, value))
