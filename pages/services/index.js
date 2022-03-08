import styled from "styled-components";
import {getCategories} from "../../lib/api";
import Image from "next/image";
import {Page} from "../../components/Page";
import Link from "next/link";
import {Container, Card, ImageContainer, CardDescription} from "../../components/Card";
import Head from "next/head";

export default function Index({services}) {
    const serviceNames = `${services.reduce(
        (res, service, curIndex, arr) => {
            if (curIndex===0)
                return res + service.name.charAt(0).toUpperCase() + service.name.substring(1) + ", ";
            if (curIndex+1===arr.length)
                return res + service.name.toLowerCase()+" ";
            return res + service.name.toLowerCase() + ", ";
        },
        ""
    )}`
    return <Page label={'Our services'} description={"Those are the categories of services we provide:"}>
        <Head>
            <title>Categories of medical services you can book | DoctorBook!</title>
            <meta name="description" content={serviceNames+"are available for booking."}/>
            <meta property={"og:title"} content={"Categories of medical services you can book | DoctorBook!"}/>
            <meta property={"og:description"} content={serviceNames+"are available for booking."}/>
        </Head>
        <Container>
            {services.map(i => (
                <Link
                    key={i.slug}
                    href={{
                        pathname: '/services/[slug]',
                        query: {slug: i.slug}
                    }}
                    passHref
                >
                    <Card key={i.name}>
                        {/*<img src={i.img} width={'100%'} height={'80%'}/>*/}
                        <ImageContainer>
                            <Image
                                src={i.src}
                                layout={'fill'}
                                // width={640}
                                // height={360}
                                quality={100}
                                alt={'avatar'}
                                objectFit={'fill'}
                                objectPosition={'50% 50%'}
                            />
                        </ImageContainer>
                        <CardDescription>
                            {i.name}
                        </CardDescription>
                    </Card>
                </Link>
            ))}
        </Container>
    </Page>
}

export async function getServerSideProps(ctx) {
// export async function getStaticProps(ctx) {
    const data = await getCategories();
    const services = data.map(i => ({name: i.name, src: i.image.src, slug: i.slug, id: i.id}));
    return {
        props: {
            services
        }
    };
}