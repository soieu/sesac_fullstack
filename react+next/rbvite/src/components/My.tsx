import { FormEvent, RefObject, useRef } from 'react';
import { HandleProp } from '../App';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import { useSession } from '../hooks/session-context.tsx';

type Props = {
  loginHandleRef: RefObject<HandleProp>;
};

const My = ({ loginHandleRef }: Props) => {
  const { login, saveCartItem, removeCartItem, session } = useSession();
  console.log('@@@My');

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;
    if (!name) {
      alert('상품명을 정확히 입력해 주세요!');
      return itemNameRef.current?.focus();
    }
    if (!price) {
      alert('가격을 정확히 입력해 주세요!');
      return itemPriceRef.current?.focus();
    }

    saveCartItem(name, Number(price));
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
  };

  return (
    <>
      {session.loginUser ? (
        <Profile />
      ) : (
        <Login login={login} ref={loginHandleRef} />
      )}
      <ul>
        {session.cart.map(({ id, name, price }) => (
          <li key={id}>
            {name}({price})
            <button onClick={() => removeCartItem(id)}>DEL</button>
          </li>
        ))}
        <form onSubmit={submit}>
          <input type='text' ref={itemNameRef} />
          <input type='number' ref={itemPriceRef} />
          <button type='submit'>Save</button>
        </form>
      </ul>
    </>
  );
};
export default My;
