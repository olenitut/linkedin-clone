'use client';

import ReactDOM from 'react-dom/client';

import { Typography, TypographyVariant } from '@/components/ui/typography';

function AfterLoginAnimation() {
  return (
    <div className='absolute inset-0 z-[9999] h-[100vh] w-[100vw] animate-afterLogin bg-white-full'>
      <div className='absolute left-[50%] top-[50%] h-[200px] w-[400px] -translate-x-[50%] -translate-y-[50%] bg-after-login bg-[length:60px] bg-center bg-no-repeat'>
        <Typography variant={TypographyVariant.h2} className='text-center'>
          Welcome to Work <span className='text-red-900'>W</span> ave!
        </Typography>
      </div>
    </div>
  );
}

export function animate() {
  const root = ReactDOM.createRoot(document.querySelector('#overlay')!);
  root.render(<AfterLoginAnimation />);
  setTimeout(() => {
    root.unmount();
  }, 2500);
}
