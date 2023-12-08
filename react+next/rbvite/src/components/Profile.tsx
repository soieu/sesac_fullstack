import { useSession } from '../hooks/session-context';

const Profile = () => {
  const {
    session: { loginUser },
    logout,
  } = useSession();
  console.log('@@@Profile');
  return (
    <>
      <div>User Name: {loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Profile;
