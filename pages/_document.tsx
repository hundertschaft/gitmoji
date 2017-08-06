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
                    <title>🔺 Gitmoji: Emoji Cheat Sheet for Github</title>
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