import React from "react";
import { Error404, Error500 } from "@codeunic/ui-components/build";
import Head from "next/head";
// @ts-ignore
import { Link } from '@routes';

function Error({statusCode}) {
    const wrapperLink = (component: string) => {
        return (
            <Link route={"index"}>
                <a>{component}</a>
            </Link>
        )
    }
    return (
        <>
            <Head>
                <title>Error page 404</title>
            </Head>
            <style jsx global>{`
                body {
                    background: white;
                }          
            `}</style>
            {statusCode === 404 ? <Error404 wrapperBack={wrapperLink}/> : <Error500 wrapperBack={wrapperLink}/>}
        </>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error