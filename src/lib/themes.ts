import { createTheme } from "@nextui-org/react"

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      backgroundLight: "#212121",
      backgroundDark: "#181818",
      background: "#181818",

      text: "#fff",
      textLogo: "#fff",

      primaryLight: "#E1F6BA", //  $blue600 on dark mode
      primary: "#74a642",
      primaryDark: "#5A8E30",
      primaryShadow: "#F1FADC",

      secondaryLight: "#F0DBFA", // $purple600 on dark mode
      secondary: "#B594D6",
      secondaryDark: "#8E6CB8",
      secondaryShadow: "#F8EDFC", // $purple600 on dark mode

      successLight: "#9FFBB8", // $green600 on dark mode
      success: "#13DD86",
      successDark: "#0DBE83",
      successShadow: "#CEFDD6", // $green600 on dark mode

      warningLight: "#FEF69B", // $yellow600 on dark mode
      warning: "#FCDF07",
      warningDark: "#D8BD05",
      warningShadow: "#FEFBCD", // $yellow600 on dark mode

      errorLight: "#FFC9A9", // $red600 on dark mode
      error: "#FF4828",
      errorDark: "#DB2A1D",
      errorShadow: "#FFE7D3", // $red600 on dark mode
      selection: "#B594D6",
      link: "#eee",
    },
  },
})
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      backgroundLight: "#fff",
      backgroundDark: "#eee",
      background: "#fff",

      text: "#333",
      textLogo: "#74a642",

      primaryLight: "#E1F6BA", //  $blue600 on dark mode
      primary: "#74a642",
      primaryDark: "#5A8E30",
      primaryShadow: "#F1FADC",

      secondaryLight: "#F0DBFA", // $purple600 on dark mode
      secondary: "#B594D6",
      secondaryDark: "#8E6CB8",
      secondaryShadow: "#F8EDFC", // $purple600 on dark mode

      successLight: "#9FFBB8", // $green600 on dark mode
      success: "#13DD86",
      successDark: "#0DBE83",
      successShadow: "#CEFDD6", // $green600 on dark mode

      warningLight: "#FEF69B", // $yellow600 on dark mode
      warning: "#FCDF07",
      warningDark: "#D8BD05",
      warningShadow: "#FEFBCD", // $yellow600 on dark mode

      errorLight: "#FFC9A9", // $red600 on dark mode
      error: "#FF4828",
      errorDark: "#DB2A1D",
      errorShadow: "#FFE7D3", // $red600 on dark mode
      selection: "#B594D6",
      link: "#333",
    },
  },
})

export { darkTheme, lightTheme }
