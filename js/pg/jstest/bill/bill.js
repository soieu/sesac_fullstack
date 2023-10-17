//참고) 부가세 = Math.round((금액/1.1) * 0.1),
// templates f``로 해보기
// 응집도 높이고 결합도 낮추는 식으로 해보기
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxfree: 1 },
};

function bill() {
  // object 안에 object인데 어차피 한가지 변수만 쓸거.. 그냥 배열로 간단하게 하는편도 좋았을 것
  const orders = {
    짜장: { count: 0 },
    짬뽕: { count: 0 },
    탕슉: { count: 0 },
  };
  return {
    order(orderMenu) {
      orders[orderMenu].count += 1;
      // 총합 금액 등은 order에 넣는 것이 효율면에서 더 좋을 듯 -> printBill을 할 때마다 계산을 하게 되므로 메모리 낭비가 될 수 있음 !
    },
    printBill() {
      console.log("=".repeat(21));
      let totalSupplyPrice = 0;
      let totalVATAmount = 0;
      // 개별 금액
      for (orderMenu in orders) {
        if (orders[orderMenu].count > 0) {
          // 필요 변수 계산
          let supplyPrice = orders[orderMenu].count * MENU[orderMenu].price;
          let VATAmount =
            MENU[orderMenu].taxfree === 1
              ? 0
              : Math.round((supplyPrice / 1.1) * 0.1);
          totalSupplyPrice += supplyPrice;
          totalVATAmount += VATAmount;
          //출력
          console.log("* " + orderMenu);
          console.log(
            " 공급가액:" +
              (supplyPrice.toLocaleString() + "원").padStart(10, " ")
          ); // 이런 부분도 함수로 해서 하면 가독성 높아질듯 중복도가 너무 높음 !!
          console.log(
            " 부가세액:" + (VATAmount.toLocaleString() + "원").padStart(10, " ")
          );
          console.log(" -".repeat(10));
        }
      }

      // 합계 출력
      console.log(
        " 주문합계:" +
          (totalSupplyPrice.toLocaleString() + "원").padStart(10, " ")
      );
      console.log(
        " 세액합계:" +
          (totalVATAmount.toLocaleString() + "원").padStart(10, " ")
      );
      console.log("=".repeat(21));
    },
  };
}

const table1 = bill();
table1.order("짜장");
table1.order("짬뽕");
table1.printBill();

table1.order("탕슉");
table1.printBill();

const table2 = bill();
table2.order("탕슉");
table2.printBill();
