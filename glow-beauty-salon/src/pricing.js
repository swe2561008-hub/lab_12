// Сонгосон үйлчилгээнүүдийн нийт үнэ ба нийт хугацааг тооцно.
function calcTotals(services) {
  return services.reduce(
    (t, s) => ({ price: t.price + s.price, minutes: t.minutes + s.minutes }),
    { price: 0, minutes: 0 }
  );
}
module.exports = { calcTotals };
