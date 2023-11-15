import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className='absolute inset-0 left-[50%] top-[50%] z-[9999] h-[100vh] w-[100vw] -translate-x-[50%] -translate-y-[50%]'>
      <Spinner />
    </div>
  );
}
