///////////////////////////////////////////////////////
////////////// trythis utility type 1 /////////////////
///////////////////////////////////////////////////////
interface IUser {
    id: number;
    age: number;
    name: string;
}

interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}
// trythis answer 1 - 1
// type Change<T, K extends keyof T, U> = {
//     // key는 T의 키고, Key가 K면 never이 되면서 K에 할당되는 Type이 없어짐. Key가 K가 아닌 것에만 정상적으로 Type 할당.
//     [Key in keyof T as Key extends K ? never : Key] : T[Key]
// } & {[x in K] : U};


// trythis answer 1 - 2
// type Change<T, K extends keyof T, U> = {
//     [key in keyof T]: key extends K ? U : T[key]
// }

//////////// test /////////////
// type DeptCaptain = Change<IDept, 'captain', IUser>;

// const DC : DeptCaptain = {
//     id: 1,
//     age: "3",
//     dname: "hi",
//     // captain: "hi"
//     captain: {
//         id: 3,
//         age: 2,
//         name: "ok"
//     }
// }
// type Err = Change<IDept, 'somekey', IUser>; // Error!!!


///////////////////////////////////////////////////////
////////////// trythis utility type 2 /////////////////
///////////////////////////////////////////////////////
interface IUser {
    id: number;
    age: number;
    name: string;
}

interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

///////////// answer /////////////////
type Combine<T,U> = {
    // T에 포함되는 키 -> 그냥 T[key]
    // U에 포함되는 키 -> 그냥 U[Key]
    // T랑 U에 포함되는 키 -> T[Key] | U[Key]
    // [key in ((keyof T) | (keyof U))] : key extends keyof T ? (key extends keyof U ? (U[key] | T[key]) : T[key]) : (key extends keyof U ? U[key] :  never)
    // [key in keyof (T & U)] : key extends ((keyof T) & (keyof U)) ? T[key] | U[key] : (key extends keyof T ? T[key] : (key extends keyof U ? U[key] :  never))
    [key in keyof (T & U)] : key extends ((keyof T) & (keyof U)) ? (T[key] | U[key]) : (T&U)[key];
}

//////////// test /////////////
type ICombined = Combine<IUser, IDept>;
const IC : ICombined = {
    id : 1,
    age: 3,
    name: "ok",
    dname: "ok",
    captain: "ok"
}



///////////////////////////////////////////////////////
////////////////// trythis Generic ////////////////////
///////////////////////////////////////////////////////


// const SIZE: { id: XYZ; price: number }[] = [
//   { id: 'X', price: 1000 },
//   { id: 'Y', price: 2000 },
//   { id: 'Z', price: 3000 },
// ];

// const SIZE : SizeId<typeof SIZE, 'id', typeof cart>[]= [
//     {id: 'X', price: 1000},
//     {id: 'Y', price: 2000},
//     {id: 'Z', price: 3000},
// ];


// const cart = {
//     X: 1,
//     Y: 2,
//     Z: 3
// };

// // id의 값들이 cart의 keyof라는걸 확실하게
// // T(SIZE)의 K(id의 value)는 U(cart)의 keyof만 온다 !

// type CartKey = keyof typeof cart;
// type SizeId<T, K extends keyof T, U> = {
//     //키(id) : 값 X|Y|Z
//     [key in keyof T]: key extends K ? T[key] : keyof U
// }

// const total = SIZE.reduce((curr, size) =>
//  curr + cart[size.id] * size.price, 0);

// itemPrice.item은 string. -> itemPrice<> type이 없으면 오류
// itemPrice<> Type을 통해 item의 value가 stock의 id값만 올 수 있게 만듬


type Item = { item: string; price: number };
type ItemPrice<T, U> = {
    [key in keyof T]: key extends 'item' ? keyof U : T[key]
}

const stock = { X: 1, Y: 2, Z: 3 };

const itemPrices: ItemPrice<Item, typeof stock>[] = [
  { item: 'X', price: 1000 },
  { item: 'Y', price: 2000 },
  { item: 'Z', price: 3000 },
];

const total = itemPrices.reduce((curr, itemPrice) => 
                  curr + stock[itemPrice.item] * itemPrice.price, 0);