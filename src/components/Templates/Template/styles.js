import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  loading: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "999",
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.6)"
  },

  main: {
    minHeight: "100vh"
  },
  content: {
    margin: "0 20px",
    display: "flex",
    flexWrap: "wrap"
  },
  error: {
    fontSize: 24,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [mediaQueries.medium]: {
      fontSize: 70
    }
  }
});
