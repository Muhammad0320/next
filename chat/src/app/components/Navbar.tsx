import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Lamadev
          </Link>

          {/* Desktop Menu & Login/Register */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/login" className="text-blue-600 hover:text-blue-800">
              Login/Register
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
