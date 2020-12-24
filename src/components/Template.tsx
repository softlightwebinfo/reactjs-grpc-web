import React, { Component } from 'react';
import { ITemplateProps } from "../interfaces/props/ITemplateProps";
import { connect } from "react-redux";
import { Button, FooterBigWidget, HeaderLayout, OfBar } from "@codeunic/ui-components/build";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faBoxes, faCog, faFire, faList } from "@fortawesome/free-solid-svg-icons";
import { MenuPropsMenuItem } from "@codeunic/ui-components/build/components/Menu/Menu.types";

// @ts-ignore
@connect()
export default class Template extends Component<ITemplateProps, any> {
    render() {
        return (
            <div>
                <HeaderLayout
                    headerTop={{
                        message: {
                            icon: <FontAwesomeIcon icon={faFire}/>,
                            message: "A new version will be released on December 25th. Stay tuned!"
                        },
                        rows: {
                            rows: [
                                {children: "LOGIN"},
                                {children: "SIGNUP"},
                            ]
                        }
                    }}
                    headerMain={{
                        leftProps: {
                            logo: {
                                image: "https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png",
                                title: "Logo",
                            },
                            input: {
                                input: {
                                    placeholder: `Search in all`,
                                },
                                dropdown: {
                                    onClick: () => {

                                    },
                                    select: "app",
                                    data: [
                                        {label: "App", value: "app"},
                                        {label: "Products", value: "products"},
                                        {label: "Blogs", value: "blogs"},
                                    ]
                                }
                            }
                        }
                    }}
                    headerNav={{
                        rowsLeft: {
                            active: "main/dashboard/crypto",
                            onClick(key: string, value: MenuPropsMenuItem, index: number) {
                                console.log(key, value, index);
                            },
                            menu: {
                                "main": {
                                    label: "Main",
                                    menu: {
                                        "dashboard": {
                                            label: "Dashboard",
                                            menu: {
                                                "crypto": {
                                                    label: "Crypto",
                                                },
                                                "crm": {
                                                    label: "Crm",
                                                },
                                                "listing": {
                                                    label: "Listing",
                                                }
                                            }
                                        },
                                        "widgets": {
                                            label: "Widgets",
                                        },
                                        "metrics": {
                                            label: "Metrics",
                                        },
                                        "angolia": {
                                            label: "Angolia",
                                        }
                                    }
                                },
                                "build-apps": {
                                    label: "In-Built Apps",
                                    menu: {
                                        "test": {
                                            label: "Test dashboard",
                                            menu: {
                                                "crypto": {
                                                    label: "Crypto",
                                                },
                                                "crm": {
                                                    label: "Crm",
                                                },
                                                "listing": {
                                                    label: "Listing",
                                                }
                                            }
                                        },
                                        "test-2": {
                                            label: "Test dashboard 2",
                                            menu: {
                                                "crypto": {
                                                    label: "Crypto",
                                                },
                                                "crm": {
                                                    label: "Crm",
                                                },
                                                "listing": {
                                                    label: "Listing",
                                                }
                                            }
                                        },
                                        "test-3": {
                                            label: "Test dashboard 3",
                                            menu: {
                                                "crypto": {
                                                    label: "Crypto",
                                                },
                                                "crm": {
                                                    label: "Crm",
                                                },
                                                "listing": {
                                                    label: "Listing",
                                                }
                                            }
                                        },
                                    }
                                },
                                "components": {
                                    label: "Components",
                                },
                                "extra-components": {
                                    label: "Extra Components",
                                },
                                "extensions": {
                                    label: "Extensions",
                                },
                                "custom-views": {
                                    label: "Custom Views",
                                },
                            }
                        },
                        rowsRight: {
                            active: "",
                            icons: true,
                            onClick(key: string, value: MenuPropsMenuItem, index: number) {
                                console.log("right", key, value, index);
                            },
                            menu: {
                                "list": {
                                    label: <Button hasIcon><FontAwesomeIcon icon={faList}/></Button>
                                },
                                "setting": {
                                    label: <Button hasIcon><FontAwesomeIcon icon={faCog}/></Button>
                                },
                                "app": {
                                    label: <Button hasIcon><FontAwesomeIcon icon={faBoxes}/></Button>
                                }
                            }
                        },
                    }}
                />
                {this.props.children}
                <FooterBigWidget
                    top={{
                        titleLeft: "Cientos de anuncios",
                        descriptionLeft: "Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!",
                        titleRight: "Subscribe to newsletter",
                        descriptionRight: "Probably the best UI Kit in the world! We know you've been waiting for it, so don't be shy!",
                        links: [
                            {title: "About", links: ["Blog", "About us", "Presentation", "Contact us"]},
                            {title: "Menu", links: ["Home", "Articles", "Login", "Create account"]},
                            {title: "Legal", links: ["FAQ", "Terms & Conditions", "Licences", "Cookies"]},
                        ],
                    }}
                    bottom={{
                        title: "Codeunic UI Components",
                        textRight: "Copyright © 2020 Codeunic All Rights Reserved.",
                        links: {
                            wrapper: (component, row) => (
                                <a href={row.route}>{component}</a>
                            ),
                            list: [
                                {label: "Blog", route: "blog"},
                                {label: "Presentation", route: "blog"},
                                {label: "Discover", route: "blog"},
                                {label: "Payment", route: "blog"},
                                {label: "Contact us", route: "blog"},
                            ]
                        }
                    }}
                />
                <OfBar
                    show={false}
                    avatar={"https://bit.ly/dan-abramov"}
                    name={"System"}
                    role={"Admin"}
                    message={
                        <div className={"h-spacer"}>
                            <FontAwesomeIcon icon={faBox}/>
                            <b>Winter sale!</b>
                            Take advantage of our 6 Special and save
                            <b>up 85% off</b>
                        </div>
                    }
                    onClose={() => alert("Hello")}
                    onClickButton={() => alert("hello")}
                    labelButton={"View Offers"}
                />
            </div>
        );
    }
}