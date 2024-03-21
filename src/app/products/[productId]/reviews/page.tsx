export default function ReviewsPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <h2>Product with Product id : {params.productId} and reviews</h2>
    </div>
  );
}
