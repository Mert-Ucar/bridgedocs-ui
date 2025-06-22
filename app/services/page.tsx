export default function Home() {
  return (
    <main className="text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to BridgeDocs</h1>
      <p className="text-lg text-gray-600 mb-8">
        Fast, affordable, and easy immigration document support.
      </p>
      <a
        href="/services"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Explore Our Services
      </a>
    </main>
  );
}
