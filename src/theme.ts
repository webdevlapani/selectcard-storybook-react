import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles/createPalette" {
  /* eslint-disable no-unused-vars */
  // The type can be extended
  // https://stackoverflow.com/a/63090311
  /* eslint-enable no-unused-vars */
}

const theme = createTheme({
  palette: {
    primary: { main: "#21B6A8" }
  },
  spacing: 2,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 10,
          border: "1px solid #EEEEEE",
          ":hover": {
            boxShadow: "0px 0px 0px 2px #65e9d9",
            border: 0,
            cursor: "pointer"
          }
        }
      }
    }
  }
})

export default theme
