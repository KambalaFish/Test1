
export const palette = {
    text: {
        primary: '#000000',
        secondary: '#8C9091',
        disabled: '#8C9091',
        hint: '#8C9091',
    },
    primary: {
        main: '#ffa50f',
        light: '#AA0630',
        dark: '#730025',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#8C9091',
        light: '#E8E8E8',
        dark: '#616161',
        contrastText: '#FFFFFF',
    },
    grey: {
        100: '#F8F8F8',
        200: '#E8E8E8',
        300: '#E7E7E7',
        500: '#8C9091',
        800: '#4B4B4D',
    },
    sliderMenu:{
        backgroundColor: '#38B662',
        active:{
            backgroundColor: 'darkblue',
            color: '#ffa50f'
        }
    },
    linearGradient:{
        secondColor: `rgba(31, 64, 55, 0.87)`,
        thirdColor: `rgba(0, 0, 0, 0)`
    },
    header: {
        container: {
            backgroundColor: `rgba(5, 11, 87, 1)`
        },
        navLink: {
            currentPage: `#fff`,
            hover: `#2DA8D8FF`
        }
    },
    footer: {
        container: {
            backgroundColor: `rgba(112, 2, 155, 1)`,
            // backgroundColor: `black`,
            fontColor: `black`,
            // fontColor: `#b4b8b5`,
        },
        infoLabel:  `rgba(161, 172, 163, 1)`,
        linkItem: `#38B662`
    },
    page: {
        backgroundColor: `black`,
        fontColor: `white`,
    },
    card: {
        // boxShadow1: `rgba(0, 0, 0, 0.2)`,
        // boxShadow2: `rgba(0, 0, 0, 0.14)`,
        // boxShadow3: `rgba(0, 0, 0, 0.12)`,
        boxShadow1: `rgba(240, 240, 240, 0.8)`,
        boxShadow2: `rgba(240, 240, 240, 0.74)`,
        boxShadow3: `rgba(240, 240, 240, 0.72)`,
        card: {
            onHover: {
                // backgroundColor: `beige`,
                // backgroundColor: `rgba(240, 240, 240, 0.8)`,
                // backgroundColor: `rgba(45, 51, 48, 1)`,
                backgroundColor: `rgba(34, 34, 34, 1)`,
            }
        },
        price: {
            // backgroundColor: rgba(206, 214, 206, 0.9),
            backgroundColor: `rgba(217, 13, 66, 1)`,
        }
    },
};