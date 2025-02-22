import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">My Blog</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-500">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
