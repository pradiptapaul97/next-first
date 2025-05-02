"use client"

import Link from "next/link";
import { use } from "react";

export default function ArticleDetails({ params, searchParams }: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{ lang?: 'en' | 'es' | 'fr' }>;
}) {
    //use to avoid async await in client component

    //async await for server components
    //use for client components
    const { articleId } = use(params);
    const { lang = 'en' } = use(searchParams);
    return (
        <>
            <h1>Welcome Article Details!!!</h1>
            <h2>Article {articleId}</h2>
            <p>Reading in {lang}</p>
            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
            </div>
        </>
    )
}