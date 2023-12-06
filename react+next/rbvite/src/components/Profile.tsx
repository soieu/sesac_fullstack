import { LoginUser } from '../App';
import { useSession } from '../hooks/session-context';

const Profile = () => {
  const { session, logout } = useSession();
  console.log('@@@Profile');
  return (
    <>
      <div>User Name: {session?.loginUser?.name}</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};
export default Profile;
