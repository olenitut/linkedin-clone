import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import { connectMongoDB } from '@/lib';
import User from '@/models/userSchema';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'john@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(cred) {
        const { email, password } = cred!;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) return null;

          const isPasswordCorrect = await bcrypt.compare(password, user.password);

          if (!isPasswordCorrect) return null;

          return user;
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  seesion: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    // IMPORTSNT change this to the actual route of sign in
    signIn: '/test',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };