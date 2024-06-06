import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center space-y-6'>
      <h1 className='text-2xl'>Loading</h1>
      <Spinner />
    </div>
  );
}
