import { useEffect, useRef } from "react";

// useRef 사용하기 - DOM 조작

export default function Login() {
  //   useRef로 ref 생성
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // 처음 렌더링될 때, idRef가 가리키는 곳에 focus
  useEffect(() => {
    console.log(idRef);
    idRef.current?.focus();
  }, []);

  const login = () => {
    if (idRef.current != null) {
      // idRef의 current값 활용1
      alert(`사용자 ${idRef.current?.value}님이 로그인 했습니다.`);
      // idRef의 current 값 활용2 : 버튼 클릭 후 내용 삭제
      idRef.current.value = " ";
    }
  };

  return (
    <>
      <h1>Login</h1>
      <input type="text" ref={idRef} />
      <input type="password" ref={passwordRef} />
      <button onClick={login}>로그인</button>
    </>
  );
}
