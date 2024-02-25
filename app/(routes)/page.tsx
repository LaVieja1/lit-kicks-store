import Link from "next/link";
import Image from "next/image";

import getProducts from "@/actions/get-products";

import ProductList from "@/components/product-list";

import JordanImage from "../../public/img/Jordan.webp";
import NikeImage from "../../public/img/Nike.webp";
import AdidasImage from "../../public/img/Adidas.webp";
import PumaImage from "../../public/img/Puma.webp";
import MilesImage from "../../public/img/Miles.jpg";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="space-y-10 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-[80vh]">
        <Link href="/brand/75b91cc8-4790-4b4a-828f-9390f27a3ce3">
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

      <div className="w-full">
        <h3 className="text-green text-lg font-bold font-acumin text-center py-2 mt-6">
          BRANDS
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-24 gap-y-8">
          <div className="w-full relative">
            <Link href="/brand/cf1ead46-bdeb-4986-81ee-3cfa8a19f4b2">
              <div className="hover:bg-green/30 w-full h-full absolute transition duration-300 z-10" />
              <Image
                src={NikeImage}
                alt="logo"
                className="object-cover object-center"
                priority
              />
              <p className="text-2xl tracking-wide text-black font-black font-nanum bg-green absolute z-20 top-1/2 right-36 py-2 px-10 hidden md:block lg:block">
                NIKE
              </p>
            </Link>
          </div>
          <div className="w-full relative">
            <Link href="/brand/4a17de0e-9a42-4150-9f27-cda35b44a3ba">
              <div className="hover:bg-green/30 w-full h-full absolute transition duration-300 z-10" />
              <Image
                fill
                src={AdidasImage}
                alt="logo"
                className="object-cover object-center"
                priority
              />
              <p className="text-2xl tracking-wide text-black font-black font-nanum bg-green absolute z-20 top-1/2 right-32 py-2 px-10 hidden md:block lg:block">
                ADIDAS
              </p>
            </Link>
          </div>
          <div className="w-full relative">
            <Link href="/brand/36582f78-3549-40c4-bbea-9c4df2a0ed21">
              <div className="hover:bg-green/30 w-full h-full absolute transition duration-300 z-10" />
              <Image
                src={PumaImage}
                alt="logo"
                className="object-cover object-center"
                priority
              />
              <p className="text-2xl tracking-wide text-black font-black font-nanum bg-green absolute z-20 top-1/2 right-36 py-2 px-10 hidden md:block lg:block">
                PUMA
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-8">
        <ProductList title="NEW ARRIVALS" items={products} />
      </div>

      <div className="w-full">
        <h3 className="font-acumin text-green text-lg font-bold text-center py-2 mt-4">
          FEATURED
        </h3>
        <div className="relative">
          <Image
            src={MilesImage}
            alt="Miles"
            className="w-full h-[50vh] object-cover"
            priority
          />
          <h4 className="absolute top-1/4 left-0 px-10 text-green text-6xl max-w-2xl font-bold font-nanum hidden lg:block">
            Miles Stewart&apos;s favorites
          </h4>
          <h4 className="absolute top-1/4 right-0 px-10 text-green text-8xl max-w-2xl font-extrabold font-nanum hidden lg:block">
            {`;)`}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
