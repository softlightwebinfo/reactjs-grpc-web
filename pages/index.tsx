import React, { Component } from "react";
import Template from "@components/Template";
import { faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    CardAboutSimpleWidget,
    CardArticleFeaturedWidget,
    CardListCategoriesWidget,
    Carousel,
    Col,
    Container,
    randomInteger,
    Row,
    TitleArrow
} from "@codeunic/ui-components";
import { CardImage, SectionInfoLayout } from "@codeunic/ui-components/build";

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
            <Template title={"Pagina principal"}>
                <Carousel
                    images={[
                        {src: "https://digivizer.com/wp-content/uploads/2020/05/carousel-blogheader-1024x536-1.png"},
                        {src: "https://mk0pollfishcomghx3kd.kinstacdn.com/wp-content/uploads/2017/12/Mobile_AD_FORMATS3-1.png"},
                        {src: "https://blog.applovin.com/wp-content/uploads/2019/09/1440x810_popular-banner.jpg"},
                        {src: "https://i.ytimg.com/vi/1OoNautKkX4/maxresdefault.jpg"},
                    ]}
                />
                <TitleArrow
                    title={"Sobre nosotros"}
                    subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
                />
                <Container>
                    <Row>
                        {[...new Array(8)].map((_, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                                <a href="/hello">
                                    <CardAboutSimpleWidget
                                        icon={faUser}
                                        title={"What is Lorem Ipsum?"}
                                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book."}
                                    />
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <TitleArrow
                    spaceTop
                    title={"Anuncios destacados"}
                    subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
                />
                <Container>
                    <Row>
                        {[...new Array(12)].map((_, index) => (
                            <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                                <a href="/article/drum">
                                    <CardArticleFeaturedWidget
                                        description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book.`}
                                        title={"Bateria DW en venta en Mallorca"}
                                        breadCrumb={[
                                            {label: "Venta", onClick: (e) => console.log(e)},
                                            {label: "Instrumentos", onClick: (e) => console.log(e)},
                                            {label: "Bateria", onClick: (e) => console.log(e)},
                                        ]}
                                        image={"https://i.pinimg.com/474x/77/f7/1c/77f71c8a34780da8c8ea90331ce002b9.jpg"}
                                        avatar={"https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg"}
                                        label={index % 2 == 0 ? "En oferta" : undefined}
                                        isFeatured={index / (Math.random() * 3) >= 3}
                                    />
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <TitleArrow
                    spaceTop
                    title={"Listado de categorias"}
                    subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
                />
                <Container>
                    <Row>
                        {[...new Array(9)].map((_, index) => (
                            <Col paddingBottom xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                                <CardListCategoriesWidget
                                    title={"Instruments"}
                                    total={randomInteger(0, 100)}
                                    list={[...new Array(randomInteger(0, 20))].map((_, i) => ({
                                        title: `Bateria ${i}`,
                                        label: randomInteger(0, 10).toString(),
                                    }))}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
                <TitleArrow
                    spaceTop
                    title={"Proyectos destacados"}
                    subTitle={"ads, mallorca, music, homes, second hand, new, companies"}
                />
                <Row containerFluid>
                    {[...new Array(4 * 9)].map((_, index) => (
                        <Col noPadding xs={12} sm={6} md={6} lg={3} xl={3} key={index}>
                            <CardImage
                                key={index}
                                image={"https://cdn2.hubspot.net/hubfs/156214/blog/Que%20es%20un%20banner-1.jpg"}
                                title={`Title ${index}`}
                            />
                        </Col>
                    ))}
                </Row>
                <SectionInfoLayout
                    spaceTop
                    backgroundImage={"https://oij.org/wp-content/uploads/2018/03/fondo-Azul-1100x730.png"}
                    image={"https://cdn2.hubspot.net/hubfs/156214/blog/Que%20es%20un%20banner-1.jpg"}
                    imageTitle={"New Horizons"}
                    list={[
                        {
                            icon: faMoneyBill,
                            title: "Save Time & Money",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        },
                        {
                            icon: faMoneyBill,
                            title: "Save Time & Money",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        },
                        {
                            icon: faMoneyBill,
                            title: "Save Time & Money",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                        }
                    ]}
                />
            </Template>
        )
    }
}