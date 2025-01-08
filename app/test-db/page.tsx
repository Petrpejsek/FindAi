import connectDB from '../../lib/db/mongodb';
import mongoose from 'mongoose';

export default async function TestDBPage() {
  try {
    const connection = await connectDB();
    
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Test databázového připojení</h1>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>Připojení k MongoDB je úspěšné!</p>
          <p>Verze MongoDB: {mongoose.version}</p>
          <p>Stav připojení: {connection.readyState}</p>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Test databázového připojení</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Chyba při připojení k MongoDB:</p>
          <p>{error instanceof Error ? error.message : String(error)}</p>
        </div>
      </div>
    );
  }
} 