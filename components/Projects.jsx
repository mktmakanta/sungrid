import Image from "next/image";

const projects = [
  {
    year: "2016—2018",
    name: "JEWEL BUILDING",
    image: "/images/hero2.jpg", // Add your image files in the `public` folder
  },
  {
    year: "2017—2020",
    name: "GRAND HOUSE",
    image: "/images/hero6.jpg",
  },
  {
    year: "2016—2018",
    name: "QR OFFICE",
    image: "/images/hero4.jpg",
  },
  {
    year: "2017—2020",
    name: "PRIME HOTEL",
    image: "/images/hero5.jpg",
  },
  {
    year: "2017—2020",
    name: "BAO HOUSE",
    image: "/images/hero7.jpg",
  },
  {
    year: "2017—2020",
    name: "VDL BUILDING",
    image: "/images/sungrid3.png",
  },
];

export default function Projects() {
  return (
    <section className="py-5 px-5 bg-white space-y-5">
      {/* Header */}
      <div className="text-center space-y-5 ">
        <h2 className="text-3xl font-bold">Selected Projects</h2>
        <p className=" text-md max-w-4xl mx-auto text-gray-600">
          Building on the trust earned from our clients, we transcend what is
          and envision what could be. Lorem ipsum dolor sit amet consectetur
          adipisicing.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <Image
              src={project.image}
              alt={project.name}
              height={800}
              width={800}
              quality={100}
              className=" transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className=" flex justify-between items-center px-2 mt-1">
              <p className="text-sm font-medium">{project.year}</p>
              <p className="text-md font-semibold">{project.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
