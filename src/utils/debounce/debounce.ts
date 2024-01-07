export const debounce = (value: string, delay: number) => {
  let timer: NodeJS.Timeout;

  return new Promise<string>((resolve) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      resolve(value);
    }, delay);
  });
};
