import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetaData = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`IPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductIdPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <h2>Product with Product id : {params.productId}</h2>
    </div>
  );
}
