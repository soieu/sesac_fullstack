import { useState } from 'react';
import Hello from './components/Hello.tsx';
import My from './components/My.tsx';
import './App.css';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
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

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);
  console.log(session);

  const plusCount = () => setCount((prevCount) => prevCount + 1);
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

  return (
    <>
      <h2>count: {count}</h2>
      <My
        session={session}
        login={login}
        logout={logout}
        removeCartItem={removeCartItem}
      />
      <Hello name='홍길동' age={30} plusCount={plusCount}>
        <h3>반갑습니다~</h3>
      </Hello>
    </>
  );
}

export default App;
