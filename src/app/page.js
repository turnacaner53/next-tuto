import { Button } from '@/components/ui/button';

export default function Home() {
  const a = 2;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Welcome Next Js</h1>
      <Button>Click me</Button>
    </main>
  );
}
