import { registerUser } from '@/app/api/register/registerActions';

const TestPage = () => {
  return (
    <div>
      <form action={registerUser}>
        <input placeholder='firstName' name='firstName' />
        <input placeholder='lastName' name='lastName' />
        <input placeholder='email' name='email' />
        <input placeholder='password' name='password' />
        <button>submit</button>
      </form>
    </div>
  );
};
export default TestPage;
