import { email, minLength, object, string, safeParse } from 'valibot';
import axios from 'axios';

import { UserRes } from '@/types/user';

export const SignUpSchema = object({
  firstName: string(),
  lastName: string(),
  email: string([email('The email address is badly formatted.')]),
  password: string([minLength(8, 'Your password must have 8 characters or more.')]),
});

export async function signup(prevState: any, formData: FormData) {
  try {
    const signupData = safeParse(SignUpSchema, {
      email: formData.get('email'),
      password: formData.get('password'),
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
    });

    if (signupData.success) {
      const { data }: { data: UserRes } = await axios.post('/api/signup', signupData.output);
      return { success: data.message };
    } else {
      return { issues: signupData.issues };
    }
  } catch (err: any) {
    let title;
    if (err.response) {
      title = err.response.data.message;
    } else {
      title = err instanceof Error ? err.message : 'Error connecting to server';
    }
    return { error: title };
  }
}
