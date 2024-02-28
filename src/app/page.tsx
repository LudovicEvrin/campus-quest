import ScanButton from "./components/ScanButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className="relative flex place-items-center text-7xl">
      Campus Quest
      </div>

      <ScanButton />

    </main>
  )
}