import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Megabyt - Awesome products for humans" />
          <meta property="fb:app_id" content="431250278255325" />
          <meta
            name="description"
            content="We build products that humans love. with a vision to build something interesting for the world."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://megabyt.dev/" />
          <meta
            property="og:title"
            content="Megabyt - Awesome products for humans"
          />
          <meta
            property="og:description"
            content="We build products that humans love. with a vision to build something interesting for the world."
          />
          <meta
            property="og:image"
            content="/megabyt.jpeg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://megabyt.dev/" />
          <meta
            property="twitter:title"
            content="Megabyt - Awesome products for humans"
          />
          <meta
            property="twitter:description"
            content="We build products that humans love. with a vision to build something interesting for the world."
          />
          <meta
            property="twitter:image"
            content="/megabyt.jpeg"
          />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
