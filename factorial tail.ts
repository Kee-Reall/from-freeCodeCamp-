export function zeroes (base: number, number: number): number {
    let noz: number = Number.MAX_VALUE;
    let j: number = base;
    for (let i = 2; i <= base; i++) {
      if (j % i === 0) {
        let p: number = 0;
        while (j % i === 0) {
           j = j / i;     
           p++;
        }
        let c: number = 0;
        let z: number = Math.floor(number / i);
        while (z > 0) {
          c += z;
          z = Math.floor(z / i);
        }
        noz = Math.min(noz, Math.floor(c / p))
      }
    }
    return noz;
  }