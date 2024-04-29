import { createTheme } from "@mui/material/styles";

//color  constants
const primaryColor = "#747bff";
const secondaryColor = "#ffffff";

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
    },
    typography: {
        fontFamily: "Poppins, Arial, sans-serif", // Set the font family to Poppins
        fontWeightBold: 700, // Set the font weight for bold text
    },
    components: {
    // Customize styles for specific components
    },
});

export default theme;