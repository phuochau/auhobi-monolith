import { Coming } from "@/components/home/coming";
import { Navbar } from "@/components/home/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Coming />
    </main>
  );
}
