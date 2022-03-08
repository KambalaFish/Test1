import {typography} from "./typography";
// import {palette} from "./palette";

export const theme = (palette) => ({
    typography,
    palette,
    spacing: (factor) => `${0.5 * factor}rem`
})