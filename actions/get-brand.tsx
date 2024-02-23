import { Brand } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/brand`;

const getBrand = async (id: string): Promise<Brand> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBrand;
