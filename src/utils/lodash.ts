/* eslint-disable @typescript-eslint/no-explicit-any */
// Custom lodash ####################################################
const _ = {
  debounce: (func: (args?: any) => void, time: number): ((args?: any) => void) => {
    let timer: ReturnType<typeof setTimeout>;
    const debouncedFunc = (args?: any): void => {
      clearTimeout(timer);
      timer = setTimeout(() => func(args), time);
    };
    return debouncedFunc;
  },
  difference: <T>(mainArray: T[], subArray: any[]): T[] => {
    return mainArray.filter((el) => !subArray.includes(el));
  },
  intersection: <T>(mainArray: T[], subArray: any[]): T[] => {
    return mainArray.filter((el) => subArray.includes(el));
  },
  differenceBy: <T>(mainArray: T[], subArray: any[], key: string): T[] => {
    const castKey = key as keyof T;
    const difference = mainArray.filter(
      (mainItem): boolean =>
        !subArray.some((subItem): T | null => {
          // if (typeof subItem === 'object') {
          //   if (mainItem[castKey] === subItem[castKey]) return mainItem;
          // } else if (mainItem[castKey] === subItem) return mainItem;

          if (typeof mainItem === 'object' && typeof subItem === 'object') {
            if (mainItem[castKey] === subItem[castKey]) return mainItem;
          }

          if (typeof mainItem === 'object' && typeof subItem !== 'object') {
            if (mainItem[castKey] === subItem) return mainItem;
          }

          if (typeof mainItem !== 'object' && typeof subItem === 'object') {
            if (mainItem === subItem[castKey]) return mainItem;
          }

          return null;
        })
    );
    return difference;
  },
  intersectionBy: <T>(mainArray: T[], subArray: any[], key: string): T[] => {
    const castKey = key as keyof T;
    const intersection = mainArray.filter((mainItem) =>
      subArray.some((subItem): T | null => {
        if (typeof mainItem === 'object' && typeof subItem === 'object') {
          if (mainItem[castKey] === subItem[castKey]) return mainItem;
        }

        if (typeof mainItem === 'object' && typeof subItem !== 'object') {
          if (mainItem[castKey] === subItem) return mainItem;
        }

        if (typeof mainItem !== 'object' && typeof subItem === 'object') {
          if (mainItem === subItem[castKey]) return mainItem;
        }

        return null;
      })
    );
    return intersection;
  },
  isEqual: (a: { [key: string]: any }, b: { [key: string]: any }): boolean => {
    const comparize = (object: { [key: string]: any }): any =>
      Object.entries(object)
        .sort()
        .map((item) => {
          if (item[1] instanceof Object) item[1] = comparize(item[1]);
          return item;
        });

    return JSON.stringify(comparize(a)) === JSON.stringify(comparize(b));
  },
};

export default _;
