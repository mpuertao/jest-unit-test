test("1", () => {
  expect(__DEV__.mutateMe).toBe(true);
  __DEV__.mutateMe = false;
  expect(__DEV__.mutateMe).toBe(false);
});
