import Check from "@material-ui/icons/Check";

const generateData = () => {
  let data = [];

  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 1) {
      data.push({
        No: i,
        noSR: `PAJI-K0${i}`,
        Date: `${i}/01/21`,
        Dept: "FIN-FINANCE",
        Keterangan: `Ket ${i}`,
        Appr: "A",
        Actv: <Check />,
        Created: "Ipul",
      });
    } else {
      data.push({
        No: i,
        noSR: "PAJI-K01",
        Date: `${i}/01/21`,
        Dept: "FIN-FINANCE",
        Keterangan: `Ket ${i}`,
        Appr: "R",
        Actv: "",
        Created: "Japri",
      });
    }
  }
  return data;
};

export default generateData;
