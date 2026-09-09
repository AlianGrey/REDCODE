import { Helmet } from 'react-helmet-async';

function SEO({
    title,
    description,
    image = '/og-image.jpg',
    url,
    }) {
        
    const siteName = 'REDCODE';

    const fullTitle = title
        ? `${title} | ${siteName}`
        : 'REDCODE — создаём сайты с характером';

    return (
        <Helmet>
            <html lang="ru" />

            <title>{fullTitle}</title>

            <meta name="description" content={description} />

            <meta name="robots" content="index, follow" />

            {url && ( <link rel="canonical" href={url}  />
            )}

            {/* Open Graph */}

            <meta property="og:type" content="website" />

            <meta property="og:title" content={fullTitle} />

            <meta property="og:description" content={description} />

            {url && ( <meta property="og:url" content={url} /> )}

            <meta property="og:image" content={image} />

            <meta property="og:site_name" content={siteName}/>

            <meta property="og:locale" content="ru_RU"/>
        </Helmet>
    )
}

export default SEO;