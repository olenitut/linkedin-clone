'use client';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

import { signup } from '@/actions/signup';
import { CustomInput } from '@/components/ui/inputs';
import { Button } from '@/components/ui/button';
import { ButtonSize, ButtonVariant } from '@/components/ui/button/button-variants';
import { getIssues } from '@/lib';
import { Typography } from '@/components/ui/typography';
import { TypographyVariant } from '@/components/ui/typography/typography-variants';

const initialState = {
  issues: null,
  error: null,
};

const toastId = 'sign-up-error';

const TestPage = () => {
  const [state, formAction] = useFormState(signup, initialState);

  const signupIssues = getIssues(state);

  const notify = () => {
    toast.error(state.error, { toastId });
  };

  return (
    <div className='mt-10'>
      <form action={formAction} className='flex flex-col gap-4 w-[400px] mx-auto'>
        <CustomInput placeholder='First Name' name='firstName' isRequired />
        <CustomInput placeholder='Last Name' name='lastName' isRequired />

        <CustomInput placeholder='Email' name='email' isRequired error={signupIssues?.email} />

        <CustomInput
          placeholder='Password'
          name='password'
          isRequired
          error={signupIssues?.password}
        />

        <Button type='submit' variant={ButtonVariant.Primary} size={ButtonSize.Full}>
          submit
        </Button>
      </form>

      {state.error && notify()}
    </div>
  );
};
export default TestPage;
