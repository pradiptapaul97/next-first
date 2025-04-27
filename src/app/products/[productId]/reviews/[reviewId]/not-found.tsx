"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathName = usePathname()
    const reviewId = pathName.split("/")[4];
    const productId = pathName.split("/")[2];

    return (
        <div className="not-found">
            <h1>404 - Review {reviewId} Not Found for product {productId}</h1>
            <p>Sorry, the review you are looking for doesn't exist.</p>
        </div>
    );
};
