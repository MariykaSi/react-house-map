import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  component: {
    flexBasic: "100%",
    width: "100%",
    margin: "20px 0",

    [mediaQueries.small]: {
      flexBasic: "50%",
      width: "50%"
    },

    [mediaQueries.medium]: {
      flexBasic: "33.333333%",
      width: "33.33333%"
    }
  }
});
