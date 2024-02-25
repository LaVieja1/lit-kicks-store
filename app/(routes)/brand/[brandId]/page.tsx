import getBrand from "@/actions/get-brand";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

import Filter from "./_components/filter";
import MobileFilters from "./_components/mobile-filters";

export const revalidate = 0;

interface BrandPageProps {
  params: {
    brandId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const BrandPage: React.FC<BrandPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    brandId: params.brandId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const brand = await getBrand(params.brandId);

  return (
    <div className="bg-black lg:flex lg:flex-row mt-8">
      <div className="max-w-[300px] px-0 sm:px-6 lg:px-8 lg:pb-24">
        <div className="lg:grid lg:grid-cols-1 lg:gap-x-8">
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="hidden lg:block mt-6">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
        </div>
      </div>

      <div className="lg:flex-1 lg:px-0">
        <h2 className="text-2xl font-bold text-green px-4 lg:px-0 uppercase">
          {brand.name}
        </h2>
        <div className="lg:-ml-8">
          <Billboard data={brand.billboard} />
        </div>
        <div className="lg:-ml-3">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
