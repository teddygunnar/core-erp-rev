let yearsArray = [];

for (let years = 2021; years >= 2000; years--) {
  yearsArray.push({ value: years, label: years });
}

export default yearsArray;
