import Global from "../components/Global";
import styled, {ThemeProvider} from "styled-components";
import {css} from "styled-components";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
// import '../styles/globals.css'
import {theme} from "../theme/theme";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import queryString from 'query-string';
import {lightPalette} from "../theme/lightPalette";
import {palette} from "../theme/palette";
import {yandexPalette} from "../theme/yandexPalette";
import Head from "next/head";

function isObjEmpty(obj) {
    for(var i in obj)
        return false;
    return true;
}

function MyApp({Component, pageProps}) {

    const [curTheme, setTheme] = useState(theme(palette));

    const router = useRouter();
    useEffect(() => {
        const searchParams = router.asPath.split('?')[1];
        // if(searchParams && Object.keys(searchParams).length!==0 && Object.getPrototypeOf(searchParams) !== Object.prototype){
        if(!isObjEmpty(searchParams)){
            console.log(searchParams);
            const parsedSearchParams = queryString.parse(searchParams);
            const {utm_source} = parsedSearchParams;
            switch (utm_source){
                case 'yandex':
                    console.log("hvzhk");
                    setTheme(theme(yandexPalette));
                    break;
                case 'google':
                    console.log('googleHvzhk');
                    setTheme(theme(palette));
                    break;
            }
        }
    },[router.asPath.split('?')[1]]);

    return <ThemeProvider theme={curTheme}>
        <Head>
            <meta name="google-site-verification" content="jMG2Byn9WnkftbrbxVgaHKoOeQspHGevYJ-KRBVe9qI" />
        </Head>
        <Global/>
        <Header/>
        <Component {...pageProps}/>
        <Footer/>
    </ThemeProvider>
}

export default MyApp
