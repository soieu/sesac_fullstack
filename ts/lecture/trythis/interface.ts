interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

// ex) 다음을 interface로 어떻게 정의할까??
type Ud2 = (User | Dept) & { addr: string };

interface UD {
  id: number;
  addr: string;
  [key: string]: string | number;
}

const ud2: UD = { id: 1, name: "HH", addr: "Seoul" };
const ud3: UD = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
