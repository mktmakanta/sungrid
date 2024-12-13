import { ChevronRight, House } from "lucide-react";
import Link from "next/link";

const Breadcrumb = ({ text }) => {
  return (
    <nav
      className=" flex px-5 py-3 text-gray-700 mx-auto max-w-7xl "
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-500"
          >
            <House className="size-4 mx-2" />
            Home
          </Link>
        </li>

        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="size-4 mx-2" />
            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
              {text}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
