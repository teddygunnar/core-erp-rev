import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Columns from "./Data/TableColumn";
import AddData from "./Data/AddTableData";
import AddColumns from "./Data/AddTableColumn";
import CustomTableStyle from "./TableStyles/CustomTableStyle";
import CustomRowBackColor from "./TableStyles/CustomRowBackColor";
import AddCustomTableStyle from "./TableStyles/AddCustomTableStyle";
import AddCustomRowBackColor from "./TableStyles/AddCustomRowBackColor";
import { Checkbox, Button, CircularProgress } from "@material-ui/core";
import { TableHeader, Footer } from "../";
import useStyles from "./styles";
import Check from "@material-ui/icons/Check";
import { useDispatch } from "react-redux";
import { fetchTableList } from "../../../../../../../../redux/actions/tableData";

const Table = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchTableDataList = () => {
    dispatch(fetchTableList(localStorage.getItem("auth")));
  };

  const [mainInfo, setMainInfo] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem("auth"));

  const switchMode = () => {
    setMainInfo((prevMainInfo) => !prevMainInfo);
  };

  const checkBoxProps = {
    color: "primary",
  };

  console.log(fetchedData);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedData(
        await dispatch(fetchTableList(localStorage.getItem("auth")))
      );
    };
    fetchAPI();
  }, []);

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setFetchedData(await fetchData());
  //   };
  //   fetchAPI();
  // }, [setFetchedData]);

  //active 0 cancel 0 = gray
  //active 1 approve 0 = default / blank (white)
  //active 1 cancel 1 = reject (red)
  //active 1 approve 1 = approve (green)

  const dataArray = () => {
    let array = [];

    fetchedData.map((val, i) =>
      array.push({
        No: i,
        noSR: val.SR_ID,
        Date: new Date(val.CREATEDATE).toDateString(),
        Dept: val.DEPT_ID,
        Keterangan: val.DESCRIPTION,
        Appr:
          (val.IS_APPROVED === 1 && "A") ||
          (val.IS_CANCEL === 1 && "R") ||
          (!val.IS_ACTIVE && ""),
        Actv: val.IS_ACTIVE === 1 && <Check />,
        Created: val.CREATEBY,
      })
    );
    return array;
  };
  return (
    <div>
      {!fetchedData.length ? (
        <CircularProgress />
      ) : (
        <div>
          <TableHeader />
          {mainInfo ? (
            <div>
              <Button
                variant="contained"
                className={classes.changeButton}
                disabled
                style={{
                  backgroundColor: "#2975D9",
                  color: "white",
                  borderRadius: "10px 10px 0 0",
                  marginRight: 5,
                  fontSize: 12,
                }}
                onClick={switchMode}
              >
                Main Info
              </Button>
              <Button
                variant="contained"
                className={classes.changeButton}
                style={{
                  backgroundColor: "white",
                  color: "#3F63F5",
                  borderRadius: "10px 10px 0 0",
                  fontSize: 12,
                }}
                onClick={switchMode}
              >
                Additional Info
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                className={classes.changeButton}
                style={{
                  backgroundColor: "white",
                  color: "#2975D9",
                  borderRadius: "10px 10px 0 0",
                  marginRight: 5,
                  fontSize: 12,
                }}
                onClick={switchMode}
              >
                Main Info
              </Button>
              <Button
                variant="contained"
                className={classes.changeButton}
                disabled
                style={{
                  backgroundColor: "#2975D9",
                  color: "white",
                  borderRadius: "10px 10px 0 0",
                  fontSize: 12,
                }}
                onClick={switchMode}
              >
                Additional Info
              </Button>
            </div>
          )}

          {mainInfo ? (
            <div>
              <DataTable
                columns={Columns}
                data={dataArray()}
                selectableRows
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={checkBoxProps}
                noContextMenu={true}
                noHeader={true}
                selectableRowsHighlight
                customStyles={CustomTableStyle}
                conditionalRowStyles={CustomRowBackColor}
                pagination
                dense
              />
              <Footer />
            </div>
          ) : (
            <div>
              <DataTable
                columns={AddColumns}
                data={AddData()}
                selectableRows
                selectableRowsComponent={Checkbox}
                selectableRowsComponentProps={checkBoxProps}
                noContextMenu={true}
                noHeader={true}
                selectableRowsHighlight
                customStyles={AddCustomTableStyle}
                conditionalRowStyles={AddCustomRowBackColor}
                pagination
              />

              <Footer />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
