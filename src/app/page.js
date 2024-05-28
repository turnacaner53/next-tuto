import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome Next Js</h1>
      <Button>Click me</Button>
    </main>
  );
}
