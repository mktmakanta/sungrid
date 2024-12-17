import Image from "next/image";

const projects = [
  {
    year: "2023-2024",
    name: "VDL HOUSE",
    image: "/images/projects/project1.jpg", // Add your image files in the `public` folder
  },
  {
    year: "2020",
    name: "DOMESTIC INSTALLATION",
    image: "/images/projects/project2.jpg",
  },
  {
    year: "2022-2023",
    name: "PRIME HOTEL",
    image: "/images/projects/project3.jpg",
  },
  {
    year: "2023",
    name: "180watt PANEL",
    image: "/images/projects/project4.jpg",
  },
  {
    year: "2023-2024",
    name: " ",
    image: "/images/projects/project5.jpg",
  },
  {
    year: "2023-2024",
    name: "NET OFFICE",
    image: "/images/projects/project6.jpg",
  },
  {
    year: "2024",
    name: "SL BUILDING",
    image: "/images/projects/project7.jpg",
  },
  {
    year: "2024",
    name: "SL BUILDING",
    image: "/images/projects/project8.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-5 px-5 bg-white space-y-5">
      {/* Header */}
      <div className="text-center space-y-5 ">
        <h2 className="text-3xl font-bold">Selected Projects</h2>
        <p className=" text-md max-w-4xl mx-auto text-gray-600">
          Discover how we bring innovative ideas to life through our expertly
          executed projects, delivering value and impact for our clients. Here
          are some of the amazing projects we’ve worked on, demonstrating our
          ability to meet diverse challenges and exceed expectations.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <Image
              src={project.image}
              alt={project.name}
              width={800}
              height={800}
              quality={100}
              className=" transform group-hover:scale-105  transition-transform duration-300 ease-in-out"
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
