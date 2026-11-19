const test = require('node:test');
const assert = require('node:assert');
const { calcTotals } = require('../src/pricing');

test('нийт үнэ, хугацааг зөв тооцно', () => {
  const r = calcTotals([
    { name: 'Үс засалт', price: 25000, minutes: 45 },
    { name: 'Маникюр', price: 30000, minutes: 60 },
  ]);
  assert.deepStrictEqual(r, { price: 55000, minutes: 105 });
});

test('хоосон жагсаалтад 0 буцаана', () => {
  assert.deepStrictEqual(calcTotals([]), { price: 0, minutes: 0 });
});
