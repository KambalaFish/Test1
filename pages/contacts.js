import styled from "styled-components";
import {Page} from "../components/Page";
import {getPageBySlug} from "../lib/api";
import Head from "next/head";

const WordpressPageContent = styled.div`
`


// export default function Contacts({page}) {
export default function Contacts() {
    return (
        // <Page label={page.title.rendered}>
        <Page label={"Contacts"}>
            <Head>
                <title>Contacts | DoctorBook!</title>
                <meta name={"description"} content={"Contacts of DoctorBook! booking service"}/>
                <meta property={"og:title"} content={"Contacts | DoctorBook!"}/>
                <meta property={"og:description"} content={"Contacts of DoctorBook! booking service"}/>
            </Head>
            {/*<WordpressPageContent dangerouslySetInnerHTML={{__html: page.content.rendered}}/>*/}
        </Page>
    );
}

// export async function getStaticProps(){
//     const page = await getPageBySlug('contacts');
//     return {
//         props:{
//             page
//         }
//     }
// }