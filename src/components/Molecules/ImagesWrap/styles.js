import { StyleSheet } from "aphrodite/no-important";
import { mediaQueries, colors } from "../../../styles/variables";

export default StyleSheet.create({
  imgContainer: {
    textAlign: "center",
    height: "300px"
  },
  buttonsContainer: {
    textAlign: "center"
  },
  button: {
    color: colors.gray,
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 28,
    margin: "0 5px"
  },
  buttonPrev: {
    ":before": {
      content: `"<"`
    }
  },
  buttonNext: {
    ":before": {
      content: `">"`
    }
  },
  children: {
    margin: "auto",
    position: "absolute",
    top: 0,
    width: "100%",
    left: 0,
    bottom: 0,
    right: 0,
    background: colors.opacityGray,
    color: colors.white,

    [mediaQueries.small]: {
      width: "300px"
    }
  }
});
