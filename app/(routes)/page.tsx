import getBillboard from "@/actions/get-billboards";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("938834aa-9e97-4653-ac9b-19abb305df0b");

  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
