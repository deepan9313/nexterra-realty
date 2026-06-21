export default function WhyInvest() {
  const reasons = [
    {
      title: "IT Growth",
      desc: "Rapidly growing IT industry creating high demand.",
      icon: "🏢",
    },
    {
      title: "Education Hub",
      desc: "Top educational institutions attract families.",
      icon: "🎓",
    },
    {
      title: "Pleasant Climate",
      desc: "Comfortable weather throughout the year.",
      icon: "🌤️",
    },
    {
      title: "Strong ROI",
      desc: "High appreciation & rental yield.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-[#071B3B] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why Invest in Coimbatore?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 text-center hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}