export const logError = (error: string | unknown) => {
  if (__DEV__) {
    console.error(error);
  }
};
