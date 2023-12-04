import { useState } from 'react';
import './App.css';
import Hello from './component/Hello';

function App() {
  const [count, setCount] = useState(0);
  const h1Style = { backgroundColor: 'red', color: 'white' };
  let xage = 0; // 암의미업다.. 값 고정되어잇다..
  const [age, setAge] = useState(0);

  {
    /* 대문자 시작은 컴포넌트를 의미 */
  }
  const Title = () => <h1 style={h1Style}>Vite + React</h1>;

  return (
    <>
      <Hello name='소영' age={age}>
        {/* 이 Hello 태그 사이의 값은 children이 돼서 전달됨 */}
        <strong>strong</strong>
      </Hello>
      {/* 중괄호 안은 JS-code로 변경된다 */}
      <Title />
      <div className='card'>
        <button
          onClick={() => {
            // 이거는 한번에 3오름
            setCount((count) => count + 1);
            setCount((count) => count + 1);
            setCount((count) => count + 1);
            // 이거는 한번에 1만 오름 (throttle)
            // setCount(count + 1);
            // setCount(count + 1);
            // setCount(count + 1);
            // if (count > 1) {
            //   setCount(count + 5);
            // }
          }}
        >
          count is {count > 1 ? 'Big' : 'Zero'}
          {count && count}{' '}
          {/* 앞(count)가 false면 앞만 출력. 앞이 true면 뒷 부분도 실행되며 출력 */}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button
          onClick={() => {
            setAge(age + 1);
          }}
        ></button>
      </div>
    </>
  );
}

export default App;
