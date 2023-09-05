export type Pages = {
  url: string;
  name: string;
  isPastDrawer: boolean;
};

const pages: Pages[] = [
  {
    url: "/",
    name: "Home",
    isPastDrawer: false,
  },
  {
    url: "/costs/bulk-add",
    name: "支出一括登録",
    isPastDrawer: true,
  },
  {
    url: "/costs/edit",
    name: "支出編集",
    isPastDrawer: true,
  },
  {
    url: "/fixed-cost",
    name: "固定費関連",
    isPastDrawer: false,
  },
  {
    url: "/past",
    name: "過去データ",
    isPastDrawer: true,
  },
];

export { pages };
