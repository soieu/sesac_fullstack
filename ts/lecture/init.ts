type TUser = {
  id: number;
  name: string;
};

type TUser2 = {
  id: number;
  name: string;
  addr?: string;
};

// const hong: TUser = { id: 1, name: "Hong", addr: "Seoul"  }; // error
const hong: TUser = { id: 1, name: "Hong" };
const lee: TUser2 = { id: 1, name: "Lee", addr: "Seoul" };

let tmpUser: TUser = lee; // ok
let partner: TUser = { ...hong, id: 2, name: "Kim" }; // ok
// let friend: TUser = { id: 3, name: "Park", addr: "Daejeon" }; // error
// friend = { id: 1, name: "Hong", addr: "Pusan" } as TUser; // error
