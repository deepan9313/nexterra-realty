export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Left Side */}
      <div
        className="hidden lg:flex w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      />

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-8">

        <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-gray-500 text-center mt-2">
            Login to Nexterra Realty
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-xl mt-8"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl mt-4"
          />

          <button className="w-full bg-[#071B3B] text-white py-3 rounded-xl mt-6">
            Login
          </button>

          <p className="text-center mt-4 text-gray-500">
            Don't have an account?
          </p>
          <a
  href="/register"
  className="block text-center mt-2 text-yellow-600 font-semibold"
>
  Create Account
</a>

        </div>

      </div>

    </div>
  );
}