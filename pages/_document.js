/*
  According to Next documentation, Html can be imported. I plan to
  add a style property to the Html tag.
*/

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import getContext from "../lib/context";
import JssProvider from "react-jss/lib/JssProvider";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="google" content="notranslate" />
          <style>
            {`
              html {
                height: 100%
              }
             `}
          </style>
        </Head>
        <body
          style={{
            height: "100%"
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/*
  The ctx object is equivalent to the one received in all getInitialProps hooks,
   with one addition: It also has the renderPage callback function
*/
MyDocument.getInitialProps = async ({ renderPage }) => {
  const pageContext = getContext();

  const page = renderPage(Component => props => (
    <JssProvider
      registry={pageContext.sheetsRegistry}
      generateClassName={pageContext.generateClassName}
    >
      <Component pageContext={pageContext} {...props} />
    </JssProvider>
  ));

  return {
    ...page,
    pageContext,
    styles: (
      <style
        id="jss-server-side"
        dangerouslySetInnerHTML={{
          __html: pageContext.sheetsRegistry.toString()
        }}
      />
    )
  };
};

export default MyDocument;
