import { alpha } from "@mui/material";

// colors.js
const colors = {
    green: '#0BA884',   // Primary color
    blue: '#3EA5C3',   // Blue Gray for subtle backgrounds or text
    blueGrey: '#6F8997',
    blueDark: '#132026',   // Dark Blue for dark mode backgrounds
    grey: '#222',
    lightGray: '#CED1D4',   // Light Gray for backgrounds or text
    mediumGray: '#6A747B'    // Medium Gray for secondary text or borders
};

export const PalleteColors = {
    green: {
        main: colors.green,
        300: alpha(colors.green, .3),
        500: alpha(colors.green, .5),
        700: alpha(colors.green, .7),
    },
    grey: {
        main: colors.grey,
        light: colors.lightGray,
        medium: colors.mediumGray,

        300: alpha(colors.grey, .3),
        500: alpha(colors.grey, .5),
        700: alpha(colors.grey, .7),
    },
    blue: {
        main: colors.blue,
        gray: colors.blueGrey,
        dark: colors.blueDark,

        300: alpha(colors.blue, .3),
        500: alpha(colors.blue, .5),
        700: alpha(colors.blue, .7),
    },
}

