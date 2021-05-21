import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuFooter: {
    width: 500,
    borderRadius: 5,
    borderBottomRightRadius: 0,
    position: "relative",
    padding: 10,
    bottom: 55,
  },
  menuFooterButton: {
    marginRight: 10,
    paddingRight: 10,
  },
  menuFooterMore: {
    paddingRight: 25,
    borderRadius: "50px",
  },
}));
