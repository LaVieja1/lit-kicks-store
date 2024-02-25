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
      <div className="bg-green w-full font-nanum h-10 flex items-center text-xs font-bold text-black px-4 sm:px-6 lg:px-8">
        <h1 className="ml-auto">WE SHIP WORLDWIDE</h1>
        <div className="ml-auto">
          <NavbarActions />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center border-b-2 border-green">
        <Link
          href="/"
          className="ml-4 flex flex-col justify-center lg:ml-0 gap-x-2 -space-y-2.5 font-black text-2xl text-green hover:skew-x-3 transition"
        >
          <p>LIT</p>
          <p>KICKS</p>
        </Link>
        <MainNav data={brands} />
      </div>
    </div>
  );
};

export default Navbar;
