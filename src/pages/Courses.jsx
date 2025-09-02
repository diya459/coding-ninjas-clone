export default function Courses() {
  const courses = [
    { title: "C++ Foundation", desc: "Learn C++ basics to advanced", price: "₹5000" },
    { title: "Java DSA", desc: "Master Java with Data Structures", price: "₹6000" },
    { title: "Web Development", desc: "Frontend + Backend full stack", price: "₹8000" },
    { title: "Python Basics", desc: "Learn Python for beginners", price: "₹4000" },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Courses 📚</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, i) => (
          <div key={i} className="border rounded-lg shadow p-6 bg-white hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
            <p className="mb-2">{c.desc}</p>
            <p className="font-bold text-orange-600">{c.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}