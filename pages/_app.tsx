import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import wrapper from "../src/store/store";
import { ContextProvider } from "@codeunic/ui-components/build";


class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        // const {store} = ctx;
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
        const translations = {};
        const lang = "en";

        return (
            <ContextProvider translations={translations} lang={lang}>
                {Component}
                <Head>
                    <title>My page</title>
                </Head>
                <Component {...pageProps}/>
            </ContextProvider>
        );
    }
}

export default wrapper.withRedux(MyApp);