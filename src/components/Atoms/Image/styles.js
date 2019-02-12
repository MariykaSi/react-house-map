import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries } from "../../../styles/variables";

export default StyleSheet.create({
  image: {
    width: "100%",
    objectFit: "cover",
    height: "300px",

    [mediaQueries.small]: {
      width: "300px"
    }
  }
});
