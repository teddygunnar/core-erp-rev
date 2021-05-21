import * as api from "../../api";

export const fetchTableList = (session) => async (dispatch) => {
  const body = {
    rqSRList: {
      COMPANY_ID: "TBP",
      SITE_ID: "CAMP",
      USER_ID: "dilly",
      SESSION_LOGIN_ID: session,
      FILTER_DAY: "ALL",
      FILTER_MONTH: "05",
      FILTER_YEAR: "2020",
      FILTER_COLOUMN: "",
      FILTER_VALUE: "",
      PAGE_NO: "1",
    },
  };
  try {
    const {
      data: { rsSRList },
    } = await api.TableData(body);
    return Array.from(rsSRList);

    // dispatch({ type: "FETCH_TABLE", payload: dataList });
  } catch (error) {
    console.log(error);
  }
};
