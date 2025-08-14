const markets = [
  // Equity Indexes
  {
    symbol: "ES",
    name: "E-mini S&P 500",
    tickSize: 0.25,
    tickValue: 12.5,
    handleValue: 50, // 1.00 = 4 ticks × 12.5
  },
  {
    symbol: "MES",
    name: "Micro E-mini S&P 500",
    tickSize: 0.25,
    tickValue: 1.25,
    handleValue: 5,
  },
  {
    symbol: "NQ",
    name: "E-mini Nasdaq 100",
    tickSize: 0.25,
    tickValue: 5,
    handleValue: 20,
  },
  {
    symbol: "MNQ",
    name: "Micro E-mini Nasdaq 100",
    tickSize: 0.25,
    tickValue: 0.5,
    handleValue: 2,
  },
  {
    symbol: "YM",
    name: "E-mini Dow Jones",
    tickSize: 1,
    tickValue: 5,
    handleValue: 5,
  },
  {
    symbol: "MYM",
    name: "Micro E-mini Dow Jones",
    tickSize: 1,
    tickValue: 0.5,
    handleValue: 0.5,
  },
  {
    symbol: "RTY",
    name: "E-mini Russell 2000",
    tickSize: 0.1,
    tickValue: 5,
    handleValue: 50,
  },
  {
    symbol: "M2K",
    name: "Micro E-mini Russell 2000",
    tickSize: 0.1,
    tickValue: 0.5,
    handleValue: 5,
  },

  // Commodities
  {
    symbol: "CL",
    name: "Crude Oil",
    tickSize: 0.01,
    tickValue: 10,
    handleValue: 100, // 1.00 = 100 ticks × 10
  },
  {
    symbol: "MCL",
    name: "Micro Crude Oil",
    tickSize: 0.01,
    tickValue: 1,
    handleValue: 10,
  },
  {
    symbol: "GC",
    name: "Gold",
    tickSize: 0.1,
    tickValue: 10,
    handleValue: 100, // 1.0 = 10 ticks × 10
  },
  {
    symbol: "MGC",
    name: "Micro Gold",
    tickSize: 0.1,
    tickValue: 1,
    handleValue: 10,
  },
  {
    symbol: "SI",
    name: "Silver",
    tickSize: 0.005,
    tickValue: 25,
    handleValue: 500,
  },
  {
    symbol: "SIL",
    name: "Micro Silver",
    tickSize: 0.005,
    tickValue: 2.5,
    handleValue: 50,
  },

  // Bonds / Treasuries
  {
    symbol: "ZB",
    name: "30-Year T-Bond",
    tickSize: 0.03125,
    tickValue: 31.25,
    handleValue: 1000,
  },
  {
    symbol: "ZN",
    name: "10-Year T-Note",
    tickSize: 0.015625,
    tickValue: 15.625,
    handleValue: 1000,
  },
  {
    symbol: "ZF",
    name: "5-Year T-Note",
    tickSize: 0.0078125,
    tickValue: 7.8125,
    handleValue: 1000,
  },
  {
    symbol: "ZT",
    name: "2-Year T-Note",
    tickSize: 0.0078125,
    tickValue: 7.8125,
    handleValue: 1000,
  },

  // Currencies
  {
    symbol: "6E",
    name: "Euro FX",
    tickSize: 0.00005,
    tickValue: 6.25,
    handleValue: 125000 * 0.01, // $1250 per full handle
  },
  {
    symbol: "M6E",
    name: "Micro Euro FX",
    tickSize: 0.00005,
    tickValue: 1.25,
    handleValue: 12500 * 0.01, // $125 per full handle
  },
  {
    symbol: "6J",
    name: "Japanese Yen",
    tickSize: 0.0000005,
    tickValue: 6.25,
    handleValue: 1250000 * 0.01,
  },
  {
    symbol: "M6J",
    name: "Micro Japanese Yen",
    tickSize: 0.0000005,
    tickValue: 1.25,
    handleValue: 125000 * 0.01,
  },
];

export default markets;
