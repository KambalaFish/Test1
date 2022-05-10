import {Page} from "../../components/Page";
import {useRouter} from "next/router";
import {getCategories, getCategoryBySlug, getCategoryProductsById} from "../../lib/api";
import styled from "styled-components";
import Image from "next/image";
import {Container, Card, ImageContainer, CardDescription, Price} from "../../components/Card";
import Link from "next/link";
import Head from "next/head";

// export const CardDescription = styled.span`
//   font-weight: bold;
//   font-size: 14px;
//   line-height: 18px;
//   margin: 14px 0 0 0;
//   text-shadow: 0 7px 14px gray;
//   text-align: center;
//   word-spacing: 5px;
//   letter-spacing: 0.1px;
//   text-transform: uppercase;
// `



const PageDescription = styled.span`
  color: inherit;
  display: inline-block;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  margin: 0 0 25px 0;
`;

export default function Service({category, products, slug}){
    const router = useRouter();
    return <Page label={category.name} description={category.description}>
        <Head>
            <title>{category.name} | DoctorBook!</title>
            <meta name={"description"} content={category.description}/>
            <meta property={"og:title"} content={category.name+" | DoctorBook!"}/>
            <meta property={"og:description"} content={category.description}/>
        </Head>
        <Container>
            {products.map(product => (
                <Card key={product.id} href={product.permalink} target="_blank">
                    <ImageContainer>
                        <Image
                            src={product.images[0].src}
                            layout={'fill'}
                            quality={100}
                            alt={product.name}
                            objectFit={'fill'}
                            objectPosition={'50% 50%'}
                        />
                    </ImageContainer>
                    <CardDescription>
                        {product.name}
                    </CardDescription>
                    <Price>
                        от {product.price}
                    </Price>
                </Card>
            ))}
        </Container>
    </Page>
}

// export async function getStaticProps(ctx){
export async function getServerSideProps(ctx){
    const {slug} = ctx.params;
    const category = await getCategoryBySlug(slug);
    const products = await getCategoryProductsById(category.id);
    return {
        props:{
            category,
            products,
            slug
        }
    }
}

// export async function getStaticPaths(){
//     const data = await getCategories();
//     const paths = data.map(i => ({params: {slug: i.slug}}));
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getServerSideProps(ctx){
//     const {slug} = ctx.params;
//     const {id} = ctx.query;
//     // const category = await getCategoryBySlug(slug);
//     // const products = await getCategoryProductsById(category.id);
//     const products = await getCategoryProductsById(id);
//     return {
//         props:{
//             // category,
//             products
//         }
//     }
// }