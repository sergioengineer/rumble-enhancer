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

      sidebarBackground: "#44d62c",
      sidebarScrollThumb: "#181818",
      menuItemBackground: "#181818",

      gradient:
        "linear-gradient(112deg, #44d62c -63.59%, #44d62c -10.3%, #FCDF07 70.46%)",

      text: "#fff",
      textLogo: "#fff",

      primaryLight: "#E1F6BA", //  $blue600 on dark mode
      primary: "#3EEB23",
      primaryDark: "##169A18",
      primaryShadow: "##169A18",

      secondaryLight: "#F0DBFA", // $purple600 on dark mode
      secondary: "#B594D6",
      secondaryDark: "#8E6CB8",
      secondaryShadow: "#F8EDFC", // $purple600 on dark mode

      successLight: "#C4FAC4", // $green600 on dark mode
      success: "##5FCE7E",
      successDark: "#2F945F",
      successShadow: "##45B16E", // $green600 on dark mode

      warningLight: "#FDF5A2", // $yellow600 on dark mode
      warning: "#F2D518",
      warningDark: "#D0B411",
      warningShadow: "#FEFAD0", // $yellow600 on dark mode

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
      sidebarScrollThumb: "#44d62c",
      menuItemBackground: "#44d62c",

      gradient:
        "linear-gradient(112deg, #44d62c -63.59%, #D8BD05 -20.3%, #FCDF07 70.46%)",

      text: "#111",
      textLogo: "#44d62c",

      primaryLight: "#E1F6BA", //  $blue600 on dark mode
      primary: "#44d62c",
      primaryDark: "##169A18",
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
