'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p>Přihlášen jako: {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Odhlásit se
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/' })}
      className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded border hover:bg-gray-50"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google logo"
        className="w-4 h-4"
      />
      Přihlásit se přes Google
    </button>
  );
} 