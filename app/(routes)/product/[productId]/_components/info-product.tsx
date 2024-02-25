"use client";

import { ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import useCart from "@/hooks/use-card";
import getSizes from "@/actions/get-sizes";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface InfoProductProps {
  data: Product;
}

const InfoProduct: React.FC<InfoProductProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-green uppercase">
        {data.brand.name}
      </h1>
      <h2 className="text-lg font-bold text-white">{data.name}</h2>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-3xl text-white mt-3">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-white">Size:</h3>
          <div className="text-white">{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-white">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
        B
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 bg-green text-black uppercase rounded-none font-bold"
        >
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default InfoProduct;
