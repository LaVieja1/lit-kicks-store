import getProducts from "@/actions/get-products";

import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";

import JordanImage from "../../public/img/ImagenlandingPage.webp";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="space-y-10 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-[80vh]">
        <Link href="/brand/7c739d8b-b0c8-4ccb-bc9d-d04d9a8d9221">
          <div className="hover:bg-green/30 w-full h-full absolute transition duration-300 z-10" />
          <Image
            fill
            src={JordanImage}
            alt="Jordan"
            className="object-cover object-center"
          />
          <p className="text-2xl tracking-wide text-black font-black font-nanum bg-green absolute z-20 bottom-20 right-28 py-2 px-10 hidden md:block lg:block">
            JORDAN
          </p>
        </Link>
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </div>
  );
};

export default HomePage;
