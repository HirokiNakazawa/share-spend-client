/**
 * 汎用関数カスタムフックの型定義
 */
export type UtilsFunctions = {
  /**
   * 今日の年を西暦で返す関数
   *
   * @returns {number}
   */
  getFullYear: () => number;

  /**
   * 今日の月を返す関数
   *
   * @returns {number}
   */
  getMonth: () => number;

  /**
   * 今日の日付を返す関数
   *
   * @returns {number}
   */
  getDate: () => number;
};

/**
 * 汎用関数カスタムフックです。
 *
 * @returns {UtilsFunctions}
 */
const useUtils = (): UtilsFunctions => {
  const today: Date = new Date();

  /**
   * 今日の年を西暦で返す関数
   *
   * @returns {number}
   */
  const getFullYear = (): number => {
    return today.getFullYear();
  };

  /**
   * 今日の月を返す関数
   *
   * @returns {number}
   */
  const getMonth = (): number => {
    return today.getMonth() + 1;
  };

  /**
   * 今日の日付を返す関数
   *
   * @returns {number}
   */
  const getDate = (): number => {
    return today.getDate();
  };

  return { getFullYear, getMonth, getDate };
};

export { useUtils };
