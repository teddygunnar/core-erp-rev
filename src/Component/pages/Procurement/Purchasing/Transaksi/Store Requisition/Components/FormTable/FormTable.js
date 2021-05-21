import React from "react";
import { Paper, InputBase, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import Select from "react-select";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./FormTable.module.css";
const FormTable = () => {
  const classes = useStyles();

  return (
    <div className={styles.formTable}>
      <Typography variant="h4">Add New SR</Typography>
      <div className={styles.header}>
        <div className={styles.formMenu}>
          <div className={classes.changeButton}>
            <Button
              variant="contained"
              className={classes.changeButton}
              style={{
                backgroundColor: "#2975D9",
                color: "white",
                borderRadius: "10px 10px 0 0",
                marginRight: 5,
                fontSize: 12,
              }}
            >
              Main Info
            </Button>
            <Button
              variant="contained"
              className={classes.changeButton}
              color="inherit"
              style={{
                backgroundColor: "white",
                color: "#3F63F5",
                borderRadius: "10px 10px 0 0",
                fontSize: 12,
              }}
            >
              Additional Info
            </Button>
          </div>
          <Paper elevation={3} className={classes.form}>
            <form>
              <div className={styles.flexBox}>
                <Typography>No. SR</Typography>
                <InputBase
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  type="text"
                  placeholder="No. SR..."
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className={styles.flexBox}>
                <Typography>Date</Typography>
                <InputBase
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInputDate,
                  }}
                  type="date"
                />
              </div>
              <div className={styles.flexBox}>
                <Typography>Jenis Pemakaian</Typography>
                <Select />
              </div>
              <div className={styles.flexBox}>
                <Typography>Diminta Oleh</Typography>
                <Select />
              </div>
              <div className={styles.flexBox}>
                <Typography>Description</Typography>
                <InputBase
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  placeholder="Description"
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <div className={styles.flexBox}>
                <Typography>Kode Approval</Typography>
                <Select />
              </div>
            </form>
          </Paper>
        </div>
        <div className={styles.menuUpload}>
          <span
            style={{
              color: "#457B9D",
              fontSize: 25,
              fontWeight: "bolder",
            }}
          >
            Lampiran Dokumen
          </span>
          <Paper className={styles.upload} elevation={3}>
            <Typography>Upload Document</Typography>
            <InputBase type="file" style={{ color: "#3F63F5" }}>
              Choose File
            </InputBase>
            <DeleteIcon />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default FormTable;
