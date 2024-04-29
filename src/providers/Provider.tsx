import { ThemeProvider, createTheme } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})


const Provider = ( { children } : {children: React.ReactNode}) => {
  return (
    <ThemeProvider theme={theme}>
         <CssBaseline />
          {children} 
    </ThemeProvider>
  )
}

export default Provider