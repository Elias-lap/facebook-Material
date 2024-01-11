import { grey } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            focuse: grey[200],
          },
        }
      : {
          // palette values for dark mode
          background: {
            focuse: null,
          },
        }),
  },
});
export default getDesignTokens