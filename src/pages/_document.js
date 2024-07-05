import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="description" content="Decentralised Green Energy Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XStructure</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
