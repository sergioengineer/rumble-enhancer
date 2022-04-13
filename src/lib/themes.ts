import { createTheme } from "@nextui-org/react"

const darkTheme = createTheme({
  type: "dark",
  theme: {
    shadows: {
      primary: "#D8BD05",
      background: "#18181888",
    },

    colors: {
      // brand colors
      backgroundLight: "#212121",
      backgroundDark: "#181818",
      background: "#181818",

      sidebarBackground: "#74a642",
      sidebarScrollThumb: "#181818",
      menuItemBackground: "#181818",

      gradient:
        "linear-gradient(112deg, #74a642 -63.59%, #74a642 -10.3%, #FCDF07 70.46%)",

      text: "#fff",
      textLogo: "#fff",

      primaryLight: "#E1F6BA", //  $blue600 on dark mode
      primary: "#74a642",
      primaryDark: "#5A8E30",
      primaryShadow: "#5A8E30",

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
      selection: "#D8BD05",
      link: "#eee",
    },
  },
})
const lightTheme = createTheme({
  type: "light",
  theme: {
    shadows: {
      primary: "#D8BD05",
      background: "#18181888",
    },
    colors: {
      // brand colors
      backgroundLight: "#fefefe",
      backgroundDark: "#eee",
      background: "#fefefe",

      sidebarBackground: "#fefefe",
      sidebarScrollThumb: "#74a642",
      menuItemBackground: "#74a642",

      gradient:
        "linear-gradient(112deg, #74a642 -63.59%, #D8BD05 -20.3%, #FCDF07 70.46%)",

      text: "#111",
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
      selection: "#D8BD05",
      link: "#333",
    },
  },
})

export { darkTheme, lightTheme }
