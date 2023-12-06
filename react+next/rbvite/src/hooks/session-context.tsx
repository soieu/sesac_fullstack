import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};
export type HandleProp = { fn: () => void };
type SessionContextProps = {
  session: Session;
  login: (_id: number, _name: string) => void;
  logout: () => void;
  removeCartItem: (_id: number) => void;
  saveCartItem: (name: string, price: number) => void;
};
const SampleSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};
const SessionContext = createContext<SessionContextProps>({
  session: SampleSession,
  login: (_id: number, _name: string) => {},
  logout: () => {},
  removeCartItem: (_id: number) => {},
  saveCartItem: (name: string, price: number) => {},
});

const SessionContextProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const login = (_id: number, _name: string) => {
    if (_name === '') {
      return alert('Please input name');
    }
    setSession({ ...session, loginUser: { id: _id, name: _name }, cart: [] });
  };
  const logout = () => {
    setSession({ ...session, loginUser: null, cart: [] });
  };
  const removeCartItem = (_id: number) => {
    setSession({
      ...session,
      cart: session.cart.filter((item) => item.id !== _id),
    });
  };
  const saveCartItem = (name: string, price: number) => {
    const id =
      session.cart
        .map((cart) => cart.id)
        .sort()
        .at(-1) || 0;

    setSession({
      ...session,
      cart: [...session.cart, { id: id + 1, name, price }],
    });
  };
  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeCartItem, saveCartItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => useContext(SessionContext);

export { SessionContextProvider, useSession };
