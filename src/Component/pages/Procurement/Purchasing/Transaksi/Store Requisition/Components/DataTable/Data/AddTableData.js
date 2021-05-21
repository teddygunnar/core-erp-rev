import Check from "@material-ui/icons/Check";

const addGenerateData = () => {
  let data = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      data.push({
        No: i,
        NoSR: `PAJI-K0${i}`,
        Date: `${i}/01/21`,
        Keterangan: `Keterangan ${i}`,
        Urgent: "",
        Ksg: "",
        Interco: <Check style={{ color: "#2975D9" }} />,
        Submit: <Check style={{ color: "#2975D9" }} />,
        PR: "",
        PO: "",
        GR: <Check style={{ color: "#2975D9" }} />,
        IO: <Check style={{ color: "#2975D9" }} />,
        REJECT: "",
      });
    } else {
      data.push({
        No: i,
        NoSR: `PAJI-K0${i}`,
        Date: `${i}/01/21`,
        Keterangan: `Keterangan ${i}`,
        Urgent: <Check style={{ color: "#2975D9" }} />,
        Ksg: "",
        Interco: "",
        Submit: "",
        PR: <Check style={{ color: "#2975D9" }} />,
        PO: "",
        GR: "",
        IO: "",
        REJECT: "",
      });
    }
  }
  return data;
};

export default addGenerateData;
