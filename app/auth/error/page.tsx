'use client';

import { useSearchParams } from 'next/navigation'

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams?.get('error') || null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Chyba při přihlášení
          </h1>
          <p className="text-gray-600 mb-4">
            {error === 'Configuration' && (
              <>
                Chyba v konfiguraci přihlášení. Prosím kontaktujte správce systému.
                <br />
                <small className="text-gray-500">
                  (Chyba: {error})
                </small>
              </>
            )}
            {error === 'AccessDenied' && (
              'Přístup zamítnut. Nemáte oprávnění k přístupu.'
            )}
            {!error && 'Nastala neočekávaná chyba při přihlášení.'}
          </p>
          <a
            href="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Zpět na hlavní stránku
          </a>
        </div>
      </div>
    </div>
  );
} 