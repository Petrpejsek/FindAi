import LoginButton from '@/components/auth/LoginButton';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Comparee.ai</h1>
        <LoginButton />
      </div>
    </main>
  );
} 