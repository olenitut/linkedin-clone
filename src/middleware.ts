export { default } from 'next-auth/middleware';

export const config = { matcher: ['/user', '/chat', '/feed', '/jobs', '/network', '/post-job'] };
