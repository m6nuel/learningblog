import Image from "next/image";
import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Proyecto en blanco <p className={lusitana.className}>otra fuente</p>
      </h1>
    </main>
  );
}
