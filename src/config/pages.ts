export type Pages = {
  url: string;
  name: string;
  isPastDrawer: boolean;
};

export const pages: Pages[] = [
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
  {
    url: "/admin",
    name: "管理者ページ",
    isPastDrawer: true,
  },
];
