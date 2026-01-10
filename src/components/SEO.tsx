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
    keywords = 'ByteFlow, ByteFlow DigiAi, ByteFlowDigi, AI Flow, Byte, ByteFlow AI, website building in Guwahati, AI in Guwahati, Digital Marketing in Guwahati, IT company in Guwahati, software company in Guwahati, Best startup website builder in Guwahati, Affordable AI automation agency India, Custom software development North East India, ByteFlow DigiAi official site, AI chatbot development Guwahati, Custom web development company Guwahati, Business automation services Assam, Digital transformation agency North East India, SEO and Digital Marketing experts Guwahati, Startup software solutions India, IT solutions, digital marketing, AI automation, web development, SEO, performance marketing',
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
            <meta property="og:site_name" content="ByteFlow DigiAi" />

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

            {/* JSON-LD Schema for Google Rich Results */}
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "ByteFlow DigiAi",
                        "alternateName": "ByteFlow",
                        "url": "https://byteflowdigiai.com",
                        "logo": "https://byteflowdigiai.com/logo.jpg",
                        "description": "ByteFlow DigiAi delivers cutting-edge IT solutions and digital marketing services.",
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91 6900105606",
                                "contactType": "customer service",
                                "areaServed": ["IN"],
                                "availableLanguage": "en"
                            }
                        ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "ByteFlow DigiAi",
                        "alternateName": "ByteFlow",
                        "url": "https://byteflowdigiai.com"
                    }
                `}
            </script>
            {/* Local Business Schema for Branches */}
            <script type="application/ld+json">
                {`
                    [
                        {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "ByteFlow DigiAi - Bengaluru",
                            "image": "https://byteflowdigiai.com/logo.jpg",
                            "url": "https://byteflowdigiai.com",
                            "telephone": "+91 6900105606",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "1st Floor, Neeladri Complex, 10th Cross, 2nd Main, Sampige Rd, Malleshwaram",
                                "addressLocality": "Bengaluru",
                                "addressRegion": "Karnataka",
                                "postalCode": "560003",
                                "addressCountry": "IN"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "ByteFlow DigiAi - Guwahati",
                            "image": "https://byteflowdigiai.com/logo.jpg",
                            "url": "https://byteflowdigiai.com",
                            "telephone": "+91 6900105606",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "101, 1st Floor, Guwahati Research Park",
                                "addressLocality": "Guwahati",
                                "addressRegion": "Assam",
                                "postalCode": "781034",
                                "addressCountry": "IN"
                            },
                            "priceRange": "$$"
                        }
                    ]
                `}
            </script>
        </Helmet>
    );
}
