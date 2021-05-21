import React from "react";
import { Paper } from "@material-ui/core";
import styles from "./Sidebar.module.css";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Paper className={styles.sidebarContainer}>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label="Procurement">
          <TreeItem nodeId="2" label="Purchasing">
            <TreeItem nodeId="3" label="Transaksi">
              <Link to="/store-requisition">
                <TreeItem nodeId="4" label="Store Requisition (SR)" />
              </Link>
              <Link to="/purchase-requisition">
                <TreeItem nodeId="5" label="Purchase Requisition (PR)" />
              </Link>
              <Link to="/canvas-sheet">
                <TreeItem nodeId="6" label="Canvas Sheet" />
              </Link>
              <Link to="/purchase-order">
                <TreeItem nodeId="7" label="Purchase Order (PO)" />
              </Link>
              <Link to="/perubahan-lokasi">
                <TreeItem nodeId="8" label="Perubahan Lokasi Pembelian" />
              </Link>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="9" label="HRIS">
          <TreeItem nodeId="10" label="Example" />
        </TreeItem>
        <TreeItem nodeId="11" label="Cost Budget">
          <TreeItem nodeId="12" label="Example" />
        </TreeItem>
        <TreeItem nodeId="13" label="Finance">
          <TreeItem nodeId="14" label="Example" />
        </TreeItem>
        <TreeItem nodeId="15" label="Programming">
          <TreeItem nodeId="16" label="Example" />
          <TreeItem nodeId="16" label="Example" />
          <TreeItem nodeId="16" label="Example" />
          <TreeItem nodeId="16" label="Example" />
          <TreeItem nodeId="16" label="Example" />
        </TreeItem>
      </TreeView>
    </Paper>
  );
};

export default Sidebar;
