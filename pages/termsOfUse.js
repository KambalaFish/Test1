import styled from "styled-components";
import {Page} from "../components/Page";
import {getPageBySlug} from "../lib/api";
import Head from "next/head";

const WordpressPageContent = styled.div`
`

export default function TermsOfUse({page}) {
    return (
        <Page label={page.title.rendered}>
            <Head>
                <title>Terms of use | DoctorBook!</title>
                <meta name={"description"} content={"DoctorBook! booking service terms of use"}/>
                <meta property={"og:title"} content={"Terms of use | DoctorBook!"}/>
                <meta property={"og:description"} content={"DoctorBook! booking service terms of use"}/>
            </Head>
            <WordpressPageContent dangerouslySetInnerHTML={{__html: page.content.rendered}}/>
        </Page>
    );
}

export async function getStaticProps(){
    const page = await getPageBySlug('terms-and-conditions');
    console.log(page);
    return {
        props:{
            page
        }
    }
}