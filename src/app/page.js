import Image from "next/image";
import FuturesCalculator from "../../components/FuturesCalculator";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen bg-gray-950 text-gray-100 p-4">
      <main className="flex flex-col items-center gap-8 w-full max-w-[950px]">
        <a
          href="https://akaki-khimshiashvili.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Akaki-logo.svg"
            alt="Akaki Logo"
            width={80}
            height={80}
            priority
          />
        </a>

        <FuturesCalculator />
      </main>
    </div>
  );
}
