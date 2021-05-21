import React from "react";
import { Typography, InputBase, Button } from "@material-ui/core";
import SearchIcon from "../../assets/icons/Icon feather-search.svg";
import FilterIcon from "../../assets/icons/Icon awesome-filter.svg";
import monthsArray from "./Months";
import daysArray from "./Days";
import yearsArray from "./Years";
import styles from "./Header.module.css";
import Select from "react-select";
import SelectStyleDays from "./SelectStyles/CustomSelectStyleDays";
import SelectStyleMonths from "./SelectStyles/CustomSelectStyleMonths";
import SelectStyleYears from "./SelectStyles/CustomSelectStyleYears";

const TableHeader = () => {
  return (
    <div className={styles.mainContainer}>
      <div item className={styles.containerHeader}>
        <Typography variant="h4">Store Requisition (SR)</Typography>
        <div className={styles.contHeaderRight}>
          <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
              <Button color="primary">
                <img src={SearchIcon} alt="Search Icon" />
              </Button>
            </div>
            <InputBase
              placeholder="Search...."
              inputProps={{ "aria-label": "search" }}
            />
            <Typography
              style={{ color: "#3F63F5" }}
              align="right"
              variant="body2"
            >
              - No.SR
            </Typography>
            <Button>
              <img src={FilterIcon} alt="Filter Icon" />
            </Button>
          </div>
          <div className={styles.date}>
            <div>
              <Select
                styles={SelectStyleDays}
                options={daysArray}
                defaultValue={{ label: 1, value: 1 }}
              />
            </div>
            <div>
              <Select
                styles={SelectStyleMonths}
                options={monthsArray}
                defaultValue={monthsArray[0]}
                autoSize={false}
              />
            </div>
            <div>
              <Select
                styles={SelectStyleYears}
                options={yearsArray}
                defaultValue={yearsArray[0]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.menu2}>
        <div className={styles.subMenu2}>
          <span>This Month:</span>
          <span className={styles.valueThisMonth}>20</span>
        </div>
        <div className={styles.subMenu2}>
          <span>On Progress:</span>
          <span className={styles.valueOnProgress}>20</span>
        </div>
        <div className={styles.subMenu2}>
          <span>Approved:</span>
          <span className={styles.valueApproved}>20</span>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
