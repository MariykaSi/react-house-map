import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  list: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAling: "center",
    borderTop: "1px solid #eeeeee",

    [mediaQueries.small]: {
      flexDirection: "row"
    }
  }
});
