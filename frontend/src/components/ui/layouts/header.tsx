// components/ui/header.tsx
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-gray-800">AutoTrack</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/features">
            <span className="text-gray-600 hover:text-gray-800">Features</span>
          </Link>
          <Link href="/pricing">
            <span className="text-gray-600 hover:text-gray-800">Pricing</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-600 hover:text-gray-800">Contact</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
