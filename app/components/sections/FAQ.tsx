
export default function FAQ() {
  const faqs = [
    { q: "What is this?", a: "A Next.js landing page." },
    { q: "Is it free?", a: "Yes." },
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">FAQ</h2>
      <div className="space-y-4 max-w-xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i}>
            <h4 className="font-semibold">{f.q}</h4>
            <p className="text-gray-500">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}