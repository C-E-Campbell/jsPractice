const { generateText, makeTrue } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
});

test("should be truthy", () => {
  const isTrue = makeTrue("Charlie");
  expect(isTrue).toBeTruthy;
});
