// 별도 파일로 작성한다면…   src/components/Hello.tsx (함수형 컴포넌트)
import { PropsWithChildren } from 'react';

type Props = {
  name?: string;
  age: number;
};

// Hello.defaultProps = { name: 'CCC' };
const Hello = ({ name = 'CCC', age, children }: PropsWithChildren<Props>) => {
  age = age + 1;
  console.log('hello.age>>', age);
  return (
    <>
      <h1>
        Hello, {name} ({age}세)
      </h1>
      {children}
    </>
  );
};
export default Hello;
