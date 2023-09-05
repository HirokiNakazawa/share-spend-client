const useUtils = () => {
  const today = new Date();

  const getFullYear = (): number => {
    return today.getFullYear();
  };

  const getMonth = (): number => {
    return today.getMonth() + 1;
  };

  const getDate = (): number => {
    return today.getDate();
  };

  return { getFullYear, getMonth, getDate };
};

export { useUtils };
