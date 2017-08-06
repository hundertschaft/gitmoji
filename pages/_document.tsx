import React from "react";
import { Provider } from "rebass";
import { injectGlobal, ServerStyleSheet } from "styled-components";

import Document, { Head, Main, NextScript } from "next/document";

// Resetting browser defaults
/* tslint:disable */
injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0 }
`;
/* tslint:enable */

// Composing app with theme
export default class LandingPage extends Document {
    render() {
        // Getting CSS Classes & Styles for in-lining as static render.
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();

        return (
            <html>
                <Head>
                    <title>Gitmoji: Emoji Cheat Sheet for Github 🚀</title>

                    <link rel="icon" type="image/png" href="static/icon/favicon-16x16.png" sizes="16x16" />
                    <link rel="icon" type="image/png" href="static/icon/favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="static/icon/favicon-96x96.png" sizes="96x96" />
                    <link rel="apple-touch-icon" href="static/icon/favicon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="static/icon/favicon-180x180.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="static/icon/favicon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="167x167" href="static/icon/favicon-167x167.png" />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {styleTags}
                </Head>
                <body>
                    <div className="root">
                        {main}
                    </div>
                    <NextScript />
                </body>
            </html>
        );
    }
}