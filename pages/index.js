import Head from "next/head";
import styled, {css, keyframes} from "styled-components";
import {useEffect} from "react";
import Image from "next/image";
import {Link, Element, scrollSpy} from 'react-scroll';
import ScrollOut from 'scroll-out'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Container = styled.section`
  overflow: hidden;
`

const StyledImage = styled(Image)`
  position: fixed !important;
  top: 3.75rem !important;
  z-index: -1;
`

const Layer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 3.75rem;
  z-index: -1;
  @media (min-width: 768px) {
    background-image: linear-gradient(270deg,
    ${props => props.theme.palette.linearGradient.secondColor} 30%, 
    ${props => props.theme.palette.linearGradient.thirdColor} 60%);
  }
`

const Section = styled.section`
  display: flex;
  position: relative;
  //height: 93.7vh;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 7.5rem 4.375rem 12.5rem 8.75rem;
  //border: 3px solid red;
`

const Content = styled.div`
  //width: 39.375rem;
  width: 30rem;
  //border: 10px groove rgba(206, 214, 206, 0.2);
  border: 0.625rem groove rgba(206, 214, 206, 0.2);
  border-radius: 4rem;
  padding: 1.5rem;
  box-shadow: -0.125rem 0.125rem 0.125rem 0.125rem rgba(206, 214, 206, 0.9),
    -0.313rem 0.313rem  0.313rem 0.313rem rgba(206, 214, 206, 0.9);
`

const Label = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: ${props => props.theme.typography.h1.fontSize};
  line-height: ${props => props.theme.typography.h1.lineHeight};
  color: ${props => props.theme.palette.primary.main};
`

// const Label = styled.div`
//   font-weight: bold;
//   font-size: 52px;
//   line-height: 72px;
//   //color: #fff;
//   //color: #b58741;
//   color: #ffa50f;
// `

const Text = styled.h2`
  margin: 1.875rem 0 0 0;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  font-size: ${props => props.theme.typography.h2.fontSize};
  line-height: ${props => props.theme.typography.h2.lineHeight};
  color: ${props => props.theme.palette.secondary.contrastText};
`

const SliderMenu = styled.div`
  position: sticky;
  padding: 0 7.188rem 0 7.188rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.palette.sliderMenu.backgroundColor};
  height: ${props => props.theme.spacing(8)};
  z-index: 3;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`

const StyledScrollLink = styled(Link)`
  cursor: pointer;
  font-weight: bold;
  color: ${props => props.theme.palette.text.primary};
  font-size: ${props => props.theme.typography.body2.fontSize};
  line-height: ${props => props.theme.typography.body2.lineHeight};
  //letter-spacing: 0.1rem;
  letter-spacing: ${props => props.theme.spacing(0.3)};
  text-transform: uppercase;
  padding: 1.563rem 2rem;

  :hover {
    color: ${props => props.theme.palette.secondary.contrastText} !important;
  }
`;

const linkProps = {
    activeClass: 'active',
    hashSpy: true,
    spy: true,
    smooth: true,
    duration: 500,
    offset: -70,
};

export default function Home() {

    useEffect(() => {
        Aos.init({duration: 1500, once: false, anchorPlacement: 'top-bottom', mirror: true});
        ScrollOut({
            threshold: 0.99,
            onShown: function (el){
                el.animate([{opacity: 0}, {opacity: 1}], 1000);
                el.style.opacity = 1;
                // el.animate([{transform: 'scale(0.5) translateX(100px)'},
                //     {transform: 'scale(0.9) translateX(-40px)'}], 1000);
                // el.style.transform = 'scale(0.9) translateX(-40px)';
            },
            onHidden: function (el){
                el.animate([{opacity: 1}, {opacity: 0}], 1000);
                el.style.opacity = 0;
                // el.animate([{transform: 'scale(0.9) translateX(-40px)'},
                //     {transform: 'scale(0.5) translateX(100px)'}], 1000);
                // el.style.transform = 'scale(0.5) translateX(100px)';
            },
            onChange: function (el){
                el.style.tranition = 'all 1s';
            }
        })

        // scrollSpy.update();
    }, [])

    return <>
        <Container id={'container'}>
            <Head>
                <title>Book your doctor on DoctorBook!</title>
                <meta name="description" content="We are specialized in providing booking of medical services from massage to dental filling.
                      You can book preferred specialist in any convenient time" />
                <meta property="og:title" content="Book your doctor on DoctorBook!"/>
                <meta property="og:description" content="We are specialized in providing booking of medical services from massage to dental filling.
                      You can book preferred specialist in any convenient time"/>
            </Head>
            <StyledImage
                // src={'/mechanic.jpg'}
                // alt={'mechanic'}
                // src={'/doctor.jpg'}
                src={'/doctor_compressed.jpg'}
                alt={'doctor'}
                layout={'fill'}
                quality={100}
                priority
                placeholder={'blur'}
                blurDataURL={'/blur.png'}
            />
            <Layer/>
            <Element name={'service'}>
                <Section>
                    <Content data-scroll data-aos={'slide-left'}>
                        <Label>
                            {/*Мы обслуживаем автомобили*/}
                            We provide medical services
                        </Label>
                        <Text>
                            We are specialized in providing booking of medical services from massage to dental filling.
                            Just choose the category you are interested in. Read description of procedure.
                            Pick the doctor you prefer. And book! Simple like that.
                            {/*Автосервис «Le Конфетка» специализируется на диагностике и ремонте глушителей и выхлопной*/}
                            {/*системы*/}
                            {/*вашего авто, замене гофр, замене и ремонту катализаторора на пламягаситель, аргонсистемах с*/}
                            {/*нержавеющей стали, разведению выхлопа и мелкому ремонту автомобилей*/}
                        </Text>
                    </Content>
                </Section>
            </Element>
            <Element name={'booking'}>
                <Section>
                    <Content data-scroll data-aos={'slide-left'}>
                        <Label>
                            Book online
                        </Label>
                        <Text>
                            You don`t have to waste your time in queue.
                            You can book service beforehand at the time which best suits for you on our website in section &quot;our services&quot;.
                            {/*У нас вам не придется стоять в очереди. Вы можете зараннее забронировать услугу в подходящее*/}
                            {/*для*/}
                            {/*вас время на нашем сайте в разделе категории услуг.*/}
                        </Text>
                    </Content>
                </Section>
            </Element>
            <Element name={'comfort'}>
                <Section>
                    <Content data-scroll data-aos={'slide-left'}>
                        <Label>
                            {/*Комфортная клиентская зона*/}
                            Comfortable client area
                        </Label>
                        <Text>
                            {/*Все наши техцентры оборудованы комфортной клиентской зоной.*/}
                            {/*Пока ваш автомобиль будет находиться в надёжных руках наших мастеров,*/}
                            {/*вы сможете воспользоваться бесплатным вай-фаем и кофе-машиной.*/}
                            All the clinics of our partners are equipped with a comfortable client area.
                            You will be treated with the modern high class equipment.
                        </Text>
                    </Content>
                </Section>
            </Element>
            <Element name={'price'}>
                <Section>
                    <Content data-scroll data-aos={'slide-left'}>
                        <Label>
                            {/*Окончательная стоимость услуг*/}
                            Final cost of services
                        </Label>
                        <Text>
                            {/*Ремонтируя или обслуживая автомобиль у нас, вы можете быть уверены в окончательной*/}
                            {/*стоимости наших услуг. Перед началом работ вы получаете заказ-наряд, в котором будет*/}
                            {/*перечислен весь список запланированных операций и процедур, а также перечень запасных*/}
                            {/*частей и расходных материалов. Если во время ремонта возникнет необходимость осуществления*/}
                            {/*дополнительных работ, их стоимость в обязательном порядке будет согласована с вами.*/}
                            Using our booking-service you can be confident in final cost of services.
                            If during the provision of services there is a need for additional costs,
                            the cost will be agreed with you without fail.
                        </Text>
                    </Content>
                </Section>
            </Element>
        </Container>
        <SliderMenu id={'slider-menu'}>
            <StyledScrollLink {...linkProps} to={'service'}>Services</StyledScrollLink>
            <StyledScrollLink {...linkProps} to={'booking'}>Booking</StyledScrollLink>
            <StyledScrollLink {...linkProps} to={'comfort'}>Comfort</StyledScrollLink>
            <StyledScrollLink {...linkProps} to={'price'}>Prices</StyledScrollLink>
        </SliderMenu>
        {/*<Footer/>*/}
        {/*<Section/>*/}
    </>;
}