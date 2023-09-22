// 부가세 = Math.round((금액/1.1) * 0.1)
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};
function bill() {
  let jjCount = MENU.짜장.count;
  let jbCount = 0;
  let tsCount = 0;
  let totalSum = 0;
  let totalTax = 0;

  return {
    order(menuName) {
      jjCount += 1;
      totalSum += MENU.menuName.price;
      if (taxfree)
        totalTax += Math.round(((MENU.menuName.price * jjCount) / 1.1) * 0.1);
    },
    printBill() {
      console.log("=".repeat(10));
      for (let menu in MENU) {
        if (menu > 0) {
          console.log("* 짜장");
          console.log(`공급가액: ${MENU.짜장.price * jjCount}원`);
          console.log(
            `부가세액: ${Math.round(
              ((MENU.짜장.price * jjCount) / 1.1) * 0.1
            )}원`
          );
        }
      }
      if (jjCount > 0) {
        console.log("==============");
        console.log("* 짜장");
        console.log(
          `공급가액:` + `${MENU.짜장.price * jjCount}원`.padStart(10, " ")
        );
        console.log(
          `부가세액: ${Math.round(((MENU.짜장.price * jjCount) / 1.1) * 0.1)}원`
        );
      }
      if (jjCount > 0) {
        console.log("------------");
        console.log("* 짬뽕");
        console.log(`공급가액: ${MENU.짬뽕.price * jjCount}원`);
        console.log(
          `부가세액: ${Math.round(((MENU.짬뽕.price * jjCount) / 1.1) * 0.1)}원`
        );
      }
      if (jjCount > 0) {
        console.log("-------------");
        console.log("* 탕슉");
        console.log(`공급가액: ${MENU.탕슉.price * jjCount}원`);
        console.log(`부가세액: 0원`);
      }
      console.log("-----------");
      console.log(`주문합계: ${MENU.짜장.price * jjCount}원`);
      console.log(
        `세액합계: ${Math.round(((MENU.짜장.price * jjCount) / 1.1) * 0.1)}원`
      );
      console.log("==============");
    },
  };
}

const table1 = bill();
table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

table1.order("탕슉");
table1.printBill();
