export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <h1 className="text-xl font-bold">MyBrand</h1>
      <div className="space-x-6">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <button className="bg-black text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
    </nav>
  );
}