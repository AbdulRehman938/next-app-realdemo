export default function Features() {
  const features = [
    { title: "Fast", desc: "Blazing fast performance." },
    { title: "SEO Friendly", desc: "Optimized for search engines." },
    { title: "Scalable", desc: "Built for growth." },
  ];

  return (
    <section id="features" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 border rounded">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}