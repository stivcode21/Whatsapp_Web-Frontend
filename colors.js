import { alpha } from "@mui/material";

// colors.js
const colors = {
    green     : '#0BA884',   // Primary color
    blue      : '#3EA5C3',   // Blue Gray for subtle backgrounds or text
    blueGrey  : '#6F8997',
    blueDark  : '#222E35',   // Dark Blue for dark mode backgrounds
    blueDarker: '#132026',
    blueBlack : '#111B21',
    grey      : '#374248',
    lightGray : '#AEBAC1',   // Light Gray for backgrounds or text
    mediumGray: '#6A747B',
    borderGrey: '#2F3B43',
    inputGrey : '#202C33',
    red       : '#f15c6d'    // Medium Gray for secondary text or borders Stashed changes
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
        border: colors.borderGrey,
        input: colors.inputGrey,

        300: alpha(colors.grey, .3),
        500: alpha(colors.grey, .5),
        700: alpha(colors.grey, .7),
    },
    blue: {
        main: colors.blue,
        grey: colors.blueGrey,
        dark: colors.blueDark,
        darker: colors.blueDarker,
        black: colors.blueBlack,

        300: alpha(colors.blue, .3),
        500: alpha(colors.blue, .5),
        700: alpha(colors.blue, .7),
    },
    red: {
        main: colors.red
    }
}

