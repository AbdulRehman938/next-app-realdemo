export default function Testimonials() {
  const data = [
    { name: "Ali", text: "This product is amazing!" },
    { name: "Sara", text: "Helped me grow my business." },
  ];

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
      <div className="space-y-6">
        {data.map((t, i) => (
          <div key={i}>
            <p className="italic">"{t.text}"</p>
            <h4 className="mt-2 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}