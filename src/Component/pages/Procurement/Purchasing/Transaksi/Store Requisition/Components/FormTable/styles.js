import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    width: "400px",
    borderRadius: "2px 10px 10px 10px",
    padding: 15,
  },
  changeButton: {
    textTransform: "capitalize",
    boxShadow: 0,
  },

  inputRoot: {
    padding: 5,
    maxWidth: "100%",
  },
  inputInput: {
    backgroundColor: "#D8F2F0",
    borderRadius: 5,
    padding: "10px 10px",
  },

  inputInputDate: {
    backgroundColor: "#D8F2F0",
    borderRadius: 5,
    padding: "10px 25px",
  },
}));
