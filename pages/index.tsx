import React, { Component } from "react";
import Template from "@components/Template";

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
            <Template>
                <div>
                    Hello world
                </div>
            </Template>
        )
    }
}