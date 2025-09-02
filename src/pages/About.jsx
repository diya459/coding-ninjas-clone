export default function About() {
  return (
    <div className="p-10 max-w-5xl mx-auto text-center">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6 text-orange-500">About Us 🏫</h2>

      {/* Intro */}
      <p className="text-lg mb-8 text-gray-700">
        This project is a <span className="font-semibold">Coding Ninjas Clone</span> built using 
        <span className="text-orange-500"> React</span> and 
        <span className="text-orange-500"> TailwindCSS</span>.  
        It showcases front-end development, routing, and clean UI design.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-6 text-left">
        <div className="p-6 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-3">🎯 Our Mission</h3>
          <p>
            To provide high-quality learning experiences through modern web technologies 
            and replicate real-world platforms for practice.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-3">🌍 Our Vision</h3>
          <p>
            To make coding accessible for everyone and build strong foundations 
            for students & professionals worldwide.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h3 className="text-2xl font-semibold mb-4 text-orange-600">💡 Why Choose Us?</h3>
        <ul className="space-y-3 text-left list-disc list-inside">
          <li>Interactive learning with modern UI</li>
          <li>Real-world projects and routing examples</li>
          <li>Clean design powered by TailwindCSS</li>
          <li>Beginner-friendly and scalable code</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">👩‍💻 Meet Our Team</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member"
              className="mx-auto rounded-full mb-3"
            />
            <h4 className="font-bold">Deepa Hirwani</h4>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member"
              className="mx-auto rounded-full mb-3"
            />
            <h4 className="font-bold">Rahul Sharma</h4>
            <p className="text-sm text-gray-600">UI/UX Designer</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/120"
              alt="Team Member"
              className="mx-auto rounded-full mb-3"
            />
            <h4 className="font-bold">Priya Verma</h4>
            <p className="text-sm text-gray-600">React Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
