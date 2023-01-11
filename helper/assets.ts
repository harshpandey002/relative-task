export type assetType = {
  symbol: string;
  name: string;
  price: string;
  change: number;
  tvl: string;
  pairs: string[];
};

export const assets: Array<assetType> = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$31,812.8",
    change: 10,
    tvl: "$60,000",
    pairs: ["SOL", "ETH", "BUSD"],
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$32.83",
    change: -12.32,
    tvl: "$60,000",
    pairs: ["BTC", "ETH", "BUSD"],
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$1,466.45",
    change: -11.93,
    tvl: "$60,000",
    pairs: ["SOL", "BTC", "BUSD"],
  },
  {
    symbol: "BUSD",
    name: "Binance USD",
    price: "$1",
    change: 0.26,
    tvl: "$60,000",
    pairs: ["SOL", "ETH", "BUSD"],
  },
];

export const assetMap: any = {
  BTC: {
    symbol: "BTC",
    name: "Bitcoin",
    gradient: "#212129",
    image: "https://i.imgur.com/CJJ9386.png",
  },
  SOL: {
    symbol: "SOL",
    name: "Solana",
    gradient: "#281940",
    image: "https://i.imgur.com/lD26QGS.png",
  },
  ETH: {
    symbol: "ETH",
    name: "Solana",
    gradient: "#2a2d3f",
    image: "https://i.imgur.com/nZsxBIV.png",
  },
  BUSD: {
    symbol: "BUSD",
    name: "Binance USD",
    gradient: "#212129",
    image: "https://i.imgur.com/LRTPROz.png",
  },
};
