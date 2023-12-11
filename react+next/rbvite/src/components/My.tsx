import { FormEvent, RefObject, useRef, useState } from 'react';
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

  const itemIdRef = useRef<number>(0);
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const [hasDirty, setDirty] = useState(false);
  const checkDirty = () => {
    const id = itemIdRef.current;
    const name = itemNameRef.current?.value;
    const price = itemPriceRef.current?.value;

    const selectedItem = !id
      ? { name: '', price: '' }
      : session.cart.find((item) => item.id === id) || {
          name: '',
          price: '',
        };
    setDirty(name !== selectedItem.name || price !== selectedItem.price);
  };
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

    saveCartItem(itemIdRef.current, name, Number(price));
    itemNameRef.current.value = '';
    itemPriceRef.current.value = '';
    setDirty(false);
  };

  const setCartItem = (id: number) => {
    itemIdRef.current = id;
    const selectedItem = session.cart.find((item) => item.id === id) || {
      name: '',
      price: '',
    };
    if (itemNameRef.current && itemPriceRef.current) {
      itemNameRef.current.value = selectedItem?.name;
      itemPriceRef.current.value = selectedItem?.price.toString();
    }
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
            <button
              onClick={() => setCartItem(id)}
              style={{
                paddingTop: 0,
                paddingBottom: '0.2rem',
                backgroundColor: 'inherit',
              }}
              title='수정하기'
            >
              <strong>{name}</strong>
            </button>
            <button onClick={() => removeCartItem(id)}>DEL</button>
          </li>
        ))}
        <form onSubmit={submit}>
          <input type='text' ref={itemNameRef} onChange={() => checkDirty()} />
          <input
            type='number'
            ref={itemPriceRef}
            onChange={() => checkDirty()}
          />
          {hasDirty && <button type='submit'>Save</button>}
        </form>
      </ul>
    </>
  );
};
export default My;
