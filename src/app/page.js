import ModeToggle from '@/components/ThemeModeToggle';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Welcome Next Js</h1>
      <ModeToggle />
      <Button>Click me</Button>
    </main>
  );
}
