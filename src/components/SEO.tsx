import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    ogType?: string;
    canonicalUrl?: string;
    noindex?: boolean;
    schemaType?: 'Organization' | 'LocalBusiness' | 'Service';
    faq?: { question: string; answer: string }[];
}

export default function SEO({
    title,
    description,
    keywords = 'ByteFlow DigiAI, IT solutions, digital marketing, AI automation, web development, SEO Guwahati, performance marketing, ByteFlow, DigiAI solutions',
    ogImage = 'https://www.byteflowdigiai.com/logo.jpg',
    ogType = 'website',
    canonicalUrl,
    noindex = false,
    schemaType = 'Organization',
    faq,
}: SEOProps) {
    const { pathname } = useLocation();
    const baseUrl = 'https://www.byteflowdigiai.com';
    const fullTitle = title.includes('ByteFlow') ? title : `${title} | ByteFlow DigiAI`;

    const currentPath = pathname === '/' ? '' : pathname;
    const finalCanonicalUrl = (canonicalUrl || `${baseUrl}${currentPath}`).replace(/\/$/, "");

    const organizationSchema = {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "ByteFlow DigiAI",
        "url": baseUrl,
        "logo": {
            "@type": "ImageObject",
            "@id": `${baseUrl}/#logo`,
            "url": `${baseUrl}/logo.jpg`,
            "contentUrl": `${baseUrl}/logo.jpg`,
            "width": 160,
            "height": 48,
            "caption": "ByteFlow DigiAI"
        },
        "image": { "@id": `${baseUrl}/#logo` },
        "description": "ByteFlow DigiAI delivers cutting-edge IT solutions, AI automation, and data-driven digital marketing services worldwide.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 6900105606",
            "contactType": "customer service",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.facebook.com/byteflowdigiai",
            "https://www.linkedin.com/company/byteflowdigiai",
            "https://twitter.com/byteflowdigiai"
        ]
    };

    const localBusinessSchema = {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        "name": "ByteFlow DigiAI",
        "image": `${baseUrl}/logo.jpg`,
        "url": baseUrl,
        "telephone": "+91 6900105606",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "1st Floor, Neeladri Complex, Sampige Rd, Malleshwaram",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560003",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "101, 1st Floor, Guwahati Research Park",
                "addressLocality": "Guwahati",
                "addressRegion": "Assam",
                "postalCode": "781031",
                "addressCountry": "IN"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9926,
            "longitude": 77.5684
        },
        "priceRange": "$$"
    };

    const faqSchema = faq ? {
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    const schemas: any[] = [
        organizationSchema,
        {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`,
            "url": baseUrl,
            "name": "ByteFlow DigiAI",
            "description": "IT & AI Solutions | Digital Marketing Agency",
            "publisher": { "@id": `${baseUrl}/#organization` },
            "inLanguage": "en-US"
        },
        {
            "@type": "WebPage",
            "@id": `${finalCanonicalUrl}/#webpage`,
            "url": finalCanonicalUrl,
            "name": fullTitle,
            "isPartOf": { "@id": `${baseUrl}/#website` },
            "about": { "@id": `${baseUrl}/#organization` },
            "description": description,
            "inLanguage": "en-US"
        }
    ];

    if (schemaType === 'LocalBusiness') {
        schemas.push(localBusinessSchema);
    }

    if (faqSchema) {
        schemas.push(faqSchema);
    }

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Mobile Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
            <meta name="theme-color" content="#0a0a0a" />

            {/* Robots */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={finalCanonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={finalCanonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="ByteFlow DigiAI" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalCanonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@ByteFlow_DigiAI" />

            {/* Additional Tags */}
            <meta name="author" content="ByteFlow DigiAI" />
            <link rel="icon" type="image/jpeg" href="/logo.jpg" />
            <link rel="apple-touch-icon" href="/logo.jpg" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": schemas
                })}
            </script>
        </Helmet>
    );
}
