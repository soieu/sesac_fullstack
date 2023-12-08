import { PropsWithChildren, createContext, useContext, useState } from 'react';

type CounterContextProps = {
  count: number;
  //   setCount: Dispatch<SetStateAction<number>>;
  plusCount: () => void;
};
const CounterContext = createContext<CounterContextProps>({
  count: 0,
  plusCount: () => {},
});

// provider는 리턴이 있다.......?
const CounterContextProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((count) => count + 1);

  return (
    <CounterContext.Provider value={{ count, plusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { CounterContextProvider, useCounter };
