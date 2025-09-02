export default function Contact() {
  return (
    <div className="p-10 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us 📞</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Message" className="w-full border p-2 rounded" rows="4"></textarea>
        <button className="bg-orange-600 text-white px-6 py-2 rounded">Send</button>
      </form>
    </div>
  );
}