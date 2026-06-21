export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="text-xl mt-4">
          Page Not Found
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-[#071B3B] text-white px-6 py-3 rounded-xl"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}