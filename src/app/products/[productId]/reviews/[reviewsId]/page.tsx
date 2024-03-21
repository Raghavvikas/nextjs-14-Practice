import { notFound } from "next/navigation";

export default function ReviewsIdPage({
  params,
}: {
  params: {
    productId: string;
    reviewsId: string;
  };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h2>
        Product with Product id : {params.productId} and reviews with reviews id
        :{params.reviewsId}
      </h2>
    </div>
  );
}
