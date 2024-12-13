import { ArrowUpRight } from "lucide-react"; // Using Lucide for icons (or you can replace it)

export default function OurServices() {
  const services = [
    {
      title: "Personalized Experiences",
      description:
        "By understanding your visitors' needs, our chat assistant creates a unique experience that keeps them coming back for more unique processes.",
    },
    {
      title: "Analytics and Insights",
      description:
        "Our chat assistant is available round the clock, providing instant responses and support, even when your team is offline. Say goodbye to missed inquiries.",
    },
    {
      title: "Seamless Integration",
      description:
        "Our chat assistant is available round the clock, providing instant responses and support, even when your team is offline. Say goodbye to missed inquiries.",
    },
  ];

  return (
    <section className="bg-[#0c1020] text-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-400">
            Casper is powered by state-of-the-art artificial intelligence and
            ensures natural and meaningful interactions.
          </p>
        </div>

        {/* Service List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-6"
            >
              <div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-400 mt-2 text-base md:text-lg">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <ArrowUpRight className="w-8 h-8 text-white hover:text-purple-400 cursor-pointer transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
