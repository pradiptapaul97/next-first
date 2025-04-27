export default async function ReviewDetails({ params }: { params: Promise<{ productId: string, reviewId: string }> }) {
    const reviewId = (await params).reviewId;
    const productId = (await params).productId;
    return (
        <>
            <h1>Review {reviewId} for product {productId}</h1>
        </>
    )
}