import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  button: {
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: 13,
    textAlign: "center",
    margin: "15px 0",
    cursor: "pointer",

    [mediaQueries.small]: {
      margin: "15px 19px"
    }
  }
});
