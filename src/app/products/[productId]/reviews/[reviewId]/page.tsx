import { notFound } from "next/navigation";
export default async function ReviewDetails({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const reviewId = (await params).reviewId;
    const productId = (await params).productId;

    if (Number(reviewId) > 1000) {
        notFound();
    }
    return (
        <>
            <h1>Review {reviewId} for product {productId}</h1>
        </>
    )
}