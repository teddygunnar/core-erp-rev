const customSelectStyleMonths = {
  container: (base) => ({
    // none of react-select's styles are passed to <Control />
    ...base,
    minWidth: 90,
    boxShadow: "0px 0px 5px rgba(0,0,0,.2)",
    borderRadius: 3,
    marginLeft: 10,
  }),
  control: (base) => ({
    ...base,
    borderRadius: 3,
    border: "0px",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 2,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "blue",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    width: 0,
  }),
};

export default customSelectStyleMonths;
