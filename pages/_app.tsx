import React from 'react';
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const {store} = ctx;
        // await store.dispatch(changeLanguage({language: "es"}));
        // @ts-ignore
        // await store.dispatch(authInitial(ctx.req ? ctx.req.headers.cookie : undefined));
        // if (!store.getState().banner.banners.length) {
        //     await store.dispatch(getAllBanner());
        // }
        const pageProps = {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        };
        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <title>My page</title>
                </Head>
                <Component {...pageProps}/>
            </>
        );
    }
}

export default MyApp;