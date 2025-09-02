import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-20 bg-orange-100">
      <h2 className="text-4xl font-bold mb-4">Welcome to Coding Ninjas Clone 🚀</h2>
      <p className="text-lg mb-6">Learn coding with the best structured courses.</p>
      <Link to="/courses" className="bg-orange-600 text-white px-6 py-3 rounded">
        Explore Courses
      </Link>
    </div>
  );
}