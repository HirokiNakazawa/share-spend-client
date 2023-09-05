type pagesType = {
  url: string;
  name: string;
};

const pages: pagesType[] = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/costs/bulk-add",
    name: "支出一括登録",
  },
  {
    url: "/costs/edit",
    name: "支出編集",
  },
  {
    url: "/fixed-cost",
    name: "固定費関連",
  },
  {
    url: "/past",
    name: "過去データ",
  },
];

export { pages };
