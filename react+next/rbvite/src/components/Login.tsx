import {
  ChangeEvent,
  FormEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

type Props = {
  login: (_id: number, _name: string) => void;
};

// export type LoginHandle

const Login = forwardRef(({ login }: Props, handleRef) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const loginHandleRef = useRef<HTMLInputElement>(null);

  const changeId = (evt: ChangeEvent<HTMLInputElement>) =>
    setId(Number(evt.currentTarget.value));

  const changeName = (evt: ChangeEvent<HTMLInputElement>) =>
    setName(evt.currentTarget.value);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value || '';
    console.log(name);
    login(id, name);
  };

  const focusNamehandler = {
    fn: () => nameRef.current?.focus(),
  };
  useImperativeHandle(handleRef, () => focusNamehandler);

  useEffect(() => {
    if (idRef.current) idRef.current.value = '0';
    if (nameRef.current) nameRef.current.value = '';
  }, []);
  return (
    <form onSubmit={submit}>
      <div>
        Login ID(숫자): <input type='number' value={id} onChange={changeId} />
      </div>
      <div>
        Login Name:{' '}
        <input type='text' value={name} onChange={changeName} ref={nameRef} />
      </div>
      <button onClick={() => login(id, name)}>Login</button>
    </form>
  );
});
export default Login;
