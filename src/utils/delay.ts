export const delay = (delayInms: number) => {
  return new Promise<void>(resolve => setTimeout(resolve, delayInms));
};
