import React, { JSX } from 'react';

const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

type AboutData = {
  [key: string]: JSX.Element | null;
};

const ABOUT_DATA: AboutData = {
  'olia-dovbush': (
    <p aria-hidden='true'>
      I am a Frontend Developer with a passion for crafting visually stunning and user-friendly
      websites.<span className='whitespace-pre'> </span>
      <br />
      <br />I believe that a website should not only function well but also be aesthetically
      pleasing and leave a lasting impression on the user.<span className='white-space-pre'> </span>
      <br />
      <br />
      My experience in HTML, CSS, JavaScript, React, Styled-components coupled with my creative eye,
      allows me to deliver splendid websites.<span className='white-space-pre'> </span>
      <br />I am excited to continue my career as a frontend developer, working on challenging
      projects.
      <br />
      <br />
      My contacts: Berezhany, Ternopil region, Ukraine.
      <br />
      <span className='whitespace-pre'> </span>Please, write me down.
      <span className='whitespace-pre'> </span>
      <br />
      <span className='whitespace-pre'> </span>My email: dovbushDOV@gmail.com
      <br />
      <span className='whitespace-pre'> </span>
      My telegram: https://t.me/oliadovbush
    </p>
  ),
  'anastasiia-hordieieva': (
    <p aria-hidden='true'>
      I have fluent English and fluent JavaScript 😅
      <br />
      <br />
      Stack:
      <br />
      TypeScript, JavaScript
      <br />
      React, Next.js, Redux,<span className='whitespace-pre'> </span>
      <br />
      Vue, Vuex
      <br />
      Tailwind CSS, Styled Components, CSS/SASS Modules
      <br />
      Node JS, Express
      <br />
      MongoDB, Mongoose, Supabase<span className='whitespace-pre'> </span>
      <br />
      Vite, Webpack
      <br />
      Jest, react testing library
      <br />
      UI/UX design
    </p>
  ),
  'mykhailo-dovbush': null,
};

export async function getAboutInfo(memberName: string): Promise<JSX.Element | null> {
  await delay(Math.random() * 200 + 400);

  return ABOUT_DATA[memberName];
}
