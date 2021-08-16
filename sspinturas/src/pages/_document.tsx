import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class  extends Document {
    render() {
        return (   
            <Html>
            <Head>

                {/* fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />

                {/* icons */}
                <link rel="stylesheet" href="../static/style.scss" />

                {/* Swiper */}
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/swiper/swiper-bundle.min.css"
                />

                {/* favicon */}
                <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}