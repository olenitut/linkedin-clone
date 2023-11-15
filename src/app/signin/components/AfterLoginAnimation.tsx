'use client';

import ReactDOM from 'react-dom/client';

function AfterLoginAnimation() {
  return (
    <div className='absolute inset-0 z-[9999] h-[100vh] w-[100vw] bg-[black]'>
      <div className='absolute left-[50%] top-[50%] h-[300px] w-[300px] -translate-x-[50%] -translate-y-[50%] bg-after-login bg-contain bg-center bg-no-repeat' />
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
