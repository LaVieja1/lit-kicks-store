"use client";

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import useCart from "@/hooks/use-card";

import Button from "@/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-transparent px-4 py-2 hover:scale-110 transition"
      >
        <ShoppingCart size={20} color="black" />
        <span className="ml-3 text-base font-bold text-black">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
