export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function() {
  return this.value;
};

Money.prototype.getCurrency = function() {
  return this.currency;
};

Money.prototype.exchangeTo = function(targetCurrency) {
  if (this.currency === targetCurrency) {
    return new Money(this.value, this.currency);
  }
  const rates = {
    usd: { eur: 0.7 },
    eur: { usd: 1.2 }
  };
  const newValue = this.value * rates[this.currency][targetCurrency];
  return new Money(newValue, targetCurrency);
};

Money.prototype.add = function(otherMoney) {
  let otherValue = otherMoney.getValue();
  const otherCurrency = otherMoney.getCurrency();
  let newValue;
  if (this.currency === otherCurrency) {
    newValue = this.value + otherValue;
  } else {
    // конвертируем другие деньги в текущую валюту
    otherValue = otherMoney.exchangeTo(this.currency).getValue();
    newValue = this.value + otherValue;
  }
  return new Money(newValue, this.currency);
};

Money.prototype.format = function() {
  // Определяем локаль и код валюты для toLocaleString
  const locale = this.currency === 'usd' ? 'en-US' : 'de-DE';
  const currencyCode = this.currency === 'usd' ? 'USD' : 'EUR';
  return this.value.toLocaleString(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};