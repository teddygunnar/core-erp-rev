const customRowBackColor = [
  {
    when: (row) => row.Appr === "A",
    style: {
      backgroundColor: "#CAFF95",
    },
  },
  {
    when: (row) => row.Appr === "R",
    style: {
      backgroundColor: "#FFB3B3",
    },
  },
  {
    when: (row) => row.Appr === "C",
    style: {
      backgroundColor: "#FFF0DC",
    },
  },
  {
    when: (row) => row.Appr === "",
    style: {
      backgroundColor: "#808080",
    },
  },
  {
    when: (row) => row.Actv === 0,
    style: {
      backgroundColor: "#808080",
    },
  },
];

export default customRowBackColor;
