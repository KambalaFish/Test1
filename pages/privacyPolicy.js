import styled from "styled-components";
import {Page} from "../components/Page";
import {getPageBySlug} from "../lib/api";
import Head from "next/head";

const WordpressPageContent = styled.div`
  //margin: 0 0 10vh 0;
`

// export default function PrivacyPolicy({page}) {
export default function PrivacyPolicy() {
    return (
        // <Page label={'Политика конфиденциальности'}>
        // <Page label={page.title.rendered}>
        <Page label={'Privacy policy'}>
            <Head>
                <title>Privacy policy | DoctorBook!</title>
                <meta name={"description"} content={"DoctorBook! booking service privacy policy"}/>
                <meta property={"og:title"} content={"Privacy policy | DoctorBook!"}/>
                <meta property={"og:description"} content={"DoctorBook! booking service privacy policy"}/>
            </Head>
            {/*<WordpressPageContent dangerouslySetInnerHTML={{__html: page.content.rendered}}/>*/}
        </Page>
    );
}
//
// export async function getStaticProps() {
//     const page = await getPageBySlug('privacy-policy');
//     return {
//         props: {
//             page
//         }
//     }
// }