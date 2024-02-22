import Link from "next/link";

import getBrands from "@/actions/get-brands";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
  const brands = await getBrands();

  return (
    <div className="borber-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">LIT KICKS</p>
          </Link>
          <MainNav data={brands} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
