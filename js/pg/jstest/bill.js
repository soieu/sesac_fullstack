//참고) 부가세 = Math.round((금액/1.1) * 0.1),
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill() {
  return {
    order(orderMenu) {},
    printBill() {},
  };
}

const table1 = bill();
table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

table1.order("탕슉");
table1.printBill();
