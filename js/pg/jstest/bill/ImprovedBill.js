const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};
// 부가세 계산
function calcTax(price) {
  return Math.round((price / 1.1) * 0.1);
}

function bill() {
  const ordered = {};
  return {
    order(item) {},
    printBill() {},
  };
}
console.log(Boolean(1));
