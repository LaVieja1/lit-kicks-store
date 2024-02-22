import Link from "next/link";

import Container from "@/components/ui/container";

const Navbar = () => {
  return (
    <nav className="borber-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl max-w-1 leading-none">LIT KICKS</p>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
