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
    keywords = 'IT solutions, digital marketing, AI automation, web development, SEO, performance marketing, ByteFlow DigiAi',
    ogImage = 'https://www.byteflowdigiai.com/logo.jpg',
    ogType = 'website',
    canonicalUrl,
    noindex = false,
}: SEOProps) {
    const baseUrl = 'https://www.byteflowdigiai.com';
    const fullTitle = title === 'Home' ? 'ByteFlow DigiAi' : `${title} | ByteFlow DigiAi`;
    // Ensure no trailing slash mismatch
    const url = (canonicalUrl || baseUrl).replace(/\/$/, "");

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Mobile Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="theme-color" content="#ffffff" />

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
            <meta property="og:site_name" content="ByteFlow DigiAi" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@ByteFlow" />

            {/* Additional Tags */}
            <meta name="author" content="ByteFlow DigiAI" />
            <link rel="icon" type="image/jpeg" href="/logo.jpg" />
            <link rel="apple-touch-icon" href="/logo.jpg" />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "ByteFlow DigiAi",
                    "url": "https://www.byteflowdigiai.com",
                    "logo": "https://www.byteflowdigiai.com/logo.jpg",
                    "description": "ByteFlow DigiAi delivers cutting-edge IT solutions and digital marketing services.",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91 6900105606",
                        "contactType": "customer service",
                        "availableLanguage": "en"
                    }
                })}
            </script>
        </Helmet>
    );
}
