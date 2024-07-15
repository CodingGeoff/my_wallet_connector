import ConnectButton from "./ConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold underline">Welcome to Web3</h1>
      <div className="absolute top-0 right-0 p-4">
        <ConnectButton />
      </div>
    </main>
  );
}
