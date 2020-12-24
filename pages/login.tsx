import React, { Component } from "react";
import { LoginPage } from "@codeunic/ui-components/build";
// @ts-ignore
import { Link } from '@routes';

export default class Index extends Component<any, any> {
    static async getInitialProps(ctx) {
        const {isServer} = ctx;

        return {
            isServer,
        };
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LoginPage
                backgroundImage={"https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg"}
                login={{
                    logoTitle: "Codeunic",
                    logoSrc: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
                    initPassword: "Test123",
                    initEmail: "email@email.com",
                    linkCreateAccountWrapper: (component) => (
                        <Link route={"register"}>
                            <a>{component}</a>
                        </Link>
                    ),
                    linkNeedHelpWrapper: (component) => (
                        <Link route={"help"}>
                            <a>{component}</a>
                        </Link>
                    ),
                    onChange(e, value, id) {
                        console.log(e, value, id)
                    },
                    onSubmit(e) {
                        console.log(e);
                    }
                }}
                footer={{
                    title: "Codeunic",
                    textRight: "@2020, Designed by codeunic",
                    links: {
                        list: [
                            {label: "BLOG", route: "blog"},
                            {label: "ABOUT US", route: "about"},
                            {label: "HELP", route: "help"},
                        ]
                    }
                }}
            />
        )
    }
}