const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it should output with 1 comma", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("it should output with 2 commas", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("it should output with 3 commas", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("it should output with no commas", () => {
    expect(addCommas(6)).toBe("6");
  });

  test("it should output a negative number with no commas", () => {
    expect(addCommas(-10)).toBe("-10");
  });

  test("it should output a negative number with commas", () => {
    expect(addCommas(-5678)).toBe("-5,678");
  });
});
