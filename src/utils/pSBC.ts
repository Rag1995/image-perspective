/* eslint-disable  */

// https://jsfiddle.net/PimpTrizkit/a7ac0qvp/
export function pSBC(p: number, c0: string, c1?: any, l?: any) {
  let r,
    g,
    b,
    P,
    f,
    t,
    h,
    i = parseInt,
    m = Math.round,
    a = typeof c1 === "string";
  if (
    typeof p !== "number" ||
    p < -1 ||
    p > 1 ||
    typeof c0 !== "string" ||
    (!c0.startsWith("r") && !c0.startsWith("#")) ||
    (c1 && !a)
  )
    return null;
  //@ts-ignore
  if (!window.pSBCr) {
    //@ts-ignore
    window.pSBCr = (d: any) => {
      let n = d.length,
        //@ts-ignore
        x: any = {};
      if (n > 9) {
        [r, g, b, a] = d = d.split(",");
        n = d.length;
        if (n < 3 || n > 4) return null;
        x.r = i(r[3] === "a" ? r.slice(5) : r.slice(4));
        x.g = i(g);
        x.b = i(b);
        //@ts-ignore
        x.a = a ? parseFloat(a) : -1;
      } else {
        if (n === 8 || n === 6 || n < 4) return null;
        if (n < 6)
          d =
            "#" +
            d[1] +
            d[1] +
            d[2] +
            d[2] +
            d[3] +
            d[3] +
            (n > 4 ? d[4] + d[4] : "");
        d = i(d.slice(1), 16);
        if (n === 9 || n === 5) {
          x.r = (d >> 24) & 255;
          x.g = (d >> 16) & 255;
          x.b = (d >> 8) & 255;
          x.a = m((d & 255) / 0.255) / 1000;
        } else {
          x.r = d >> 16;
          x.g = (d >> 8) & 255;
          x.b = d & 255;
          x.a = -1;
        }
      }
      return x;
    };
  }
  h = c0.length > 9;
  h = a ? (c1.length > 9 ? true : c1 === "c" ? !h : false) : h;
  //@ts-ignore
  f = window.pSBCr(c0);
  P = p < 0;
  //@ts-ignore
  t =
    c1 && c1 !== "c"
      ? //@ts-ignore
        window.pSBCr(c1)
      : P
      ? { r: 0, g: 0, b: 0, a: -1 }
      : { r: 255, g: 255, b: 255, a: -1 };
  p = P ? p * -1 : p;
  P = 1 - p;
  if (!f || !t) return null;
  if (l) {
    r = m(P * f.r + p * t.r);
    g = m(P * f.g + p * t.g);
    b = m(P * f.b + p * t.b);
  } else {
    r = m((P * f.r ** 2 + p * t.r ** 2) ** 0.5);
    g = m((P * f.g ** 2 + p * t.g ** 2) ** 0.5);
    b = m((P * f.b ** 2 + p * t.b ** 2) ** 0.5);
  }
  a = f.a;
  t = t.a;
  //@ts-ignore
  f = a >= 0 || t >= 0;
  //@ts-ignore
  a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * p) : 0;
  //@ts-ignore
  if (h)
    return (
      "rgb" +
      (f ? "a(" : "(") +
      r +
      "," +
      g +
      "," +
      b +
      //@ts-ignore
      (f ? "," + m(a * 1000) / 1000 : "") +
      ")"
    );
  //@ts-ignore
  else
    return (
      "#" +
      //@ts-ignore
      (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? m(a * 255) : 0))
        .toString(16)
        .slice(1, f ? undefined : -2)
    );
}
