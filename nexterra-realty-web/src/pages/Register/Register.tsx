export default function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa')",
        }}
      />

      <div className="flex-1 flex items-center justify-center p-8">

        <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center">
            Create Account
          </h1>

          <p className="text-gray-500 text-center mt-2">
            Join Nexterra Realty
          </p>

          <input
            placeholder="Full Name"
            className="w-full border p-3 rounded-xl mt-6"
          />

          <input
            placeholder="Email"
            className="w-full border p-3 rounded-xl mt-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl mt-4"
          />

          <button className="w-full bg-[#071B3B] text-white py-3 rounded-xl mt-6">
            Create Account
          </button>

        </div>

      </div>

    </div>
  );
}