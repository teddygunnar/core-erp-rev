const customRowBackColor = [
  {
    when: (row) => row.No < 6,
    style: {
      backgroundColor: "#D8F2F0",
      // color: 'white',
    },
  },
  {
    when: (row) => row.No >= 6,
    style: {
      backgroundColor: "#FBE0E2",
    },
  },
  {
    when: (row) => row.No >= 8,
    style: {
      backgroundColor: "#FFF0DC",
    },
  },
];

export default customRowBackColor;
