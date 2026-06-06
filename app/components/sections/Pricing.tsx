export default function Pricing() {
  const plans = [
    { name: "Basic", price: "$10" },
    { name: "Pro", price: "$20" },
  ];

  return (
    <section id="pricing" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Pricing</h2>
      <div className="flex justify-center gap-8">
        {plans.map((p, i) => (
          <div key={i} className="border p-6 rounded w-40">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-2xl mt-4">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}