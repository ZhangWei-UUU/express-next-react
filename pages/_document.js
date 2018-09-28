import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <html lang="zh-Hans">
                <Head>
                    <title>竹·纸</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="张伟JS个人网站"/>
                    <link rel="shortcut icon" href="/static/favicon.ico"></link>
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link rel="stylesheet" href="/static/highlight/styles/github-gist.css"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;