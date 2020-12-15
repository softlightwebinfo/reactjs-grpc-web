import React, { Component } from 'react';
import { ITemplateProps } from "../interfaces/props/ITemplateProps";
import { connect } from "react-redux";

@connect()
export default class Template extends Component<ITemplateProps, any> {
    render() {
        return (
            <div>

            </div>
        );
    }
}