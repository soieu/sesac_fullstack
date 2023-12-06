import { useRef, useState } from 'react';
import Hello from './components/Hello.tsx';
import My from './components/My.tsx';
import './App.css';
import { useCounter } from './hooks/counter-context.tsx';
import { SessionContextProvider } from './hooks/session-context.tsx';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};
export type HandleProp = { fn: () => void };

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
  const { count } = useCounter();
  const loginHandleRef = useRef<HandleProp>(null);

  return (
    <>
      <h2>count: {count}</h2>
      <SessionContextProvider>
        <My loginHandleRef={loginHandleRef} />
      </SessionContextProvider>
      <Hello name='홍길동' age={30}>
        <h3>반갑습니다~</h3>
      </Hello>
    </>
  );
}

export default App;
