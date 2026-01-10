import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
    noindex?: boolean;
}

export default function SEO({
    title,
    description,
    keywords = 'IT solutions, digital marketing, AI automation, web development, SEO, performance marketing, ByteFlow',
    ogImage = 'https://byteflowdigiai.com/logo.jpg',
    ogType = 'website',
    canonicalUrl,
    noindex = false,
}: SEOProps) {
    const baseUrl = 'https://byteflowdigiai.com';
    const fullTitle = title === 'Home' ? 'ByteFlow DigiAi' : `${title} | ByteFlow DigiAi`;
    const url = canonicalUrl || baseUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Robots */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="ByteFlow DigiAI" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@ByteFlow" />
            <meta name="twitter:creator" content="@ByteFlow" />

            {/* Additional SEO tags */}
            <meta name="author" content="ByteFlow DigiAI" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
        </Helmet>
    );
}
