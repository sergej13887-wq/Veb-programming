export default function make(numer = 0, denom = 1) {
  let numerator = numer;
  let denominator = denom;

  return {

    setNumer(value) {
      numerator = value;
    },

    setDenom(value) {
      denominator = value;
    },

    getNumer() {
      return numerator;
    },
  
    getDenom() {
      return denominator;
    },

    toString() {
      return `${numerator}/${denominator}`;
    },

    add(other) {
      const a = numerator;
      const b = denominator;
      const c = other.getNumer();
      const d = other.getDenom();
      const newNumer = a * d + b * c;
      const newDenom = b * d;
      return make(newNumer, newDenom);
    }
  };
}