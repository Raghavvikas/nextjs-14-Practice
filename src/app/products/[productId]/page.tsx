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
