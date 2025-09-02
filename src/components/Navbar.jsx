import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Coding Ninjas Clone</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/courses" className="hover:underline">Courses</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
}