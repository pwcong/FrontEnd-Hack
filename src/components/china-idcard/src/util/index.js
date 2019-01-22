export function formatNum(n, l = 2) {
  if (n.toString().length > l) {
    throw new Error('invalid number width length');
  }

  let t = (n / Math.pow(10, l)).toFixed(l);
  return t.substring(2, t.length);
}
