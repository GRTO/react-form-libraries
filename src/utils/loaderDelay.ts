export const loaderWithDelay = (
  component: Promise<any>,
  minimunDelay: number = 0
) =>
  Promise.all([
    component,
    new Promise((resolve) => setTimeout(resolve, minimunDelay)),
  ]).then(([moduleExports]) => moduleExports);
