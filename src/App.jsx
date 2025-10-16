import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-blue-600 text-white p-4 text-center shadow">
        <h1 className="text-xl font-bold">PokéCatálogo</h1>
      </header>

      <main className="p-4">
        <Home />
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10">
        Dupla: Gustavo e Jonas
      </footer>
    </div>
  );
}
