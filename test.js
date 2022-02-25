import dependencies from "dependencies";
import yourModule from "../yourModule";

jest.mock("dependencies");

describe("your module", () => {
  test("should pass this canary test", () => {
    expect(true).toBeTruthy();
  });
  describe("your function", () => {
    beforeEach(() => {});
    afterEach(() => {
      jest.resetAllMocks();
    });
    test("should return XXX for argument XXX", () => {
      const arg = "";
      const result = yourFunction(arg);
      const expected = "";
      expect(result).toEqual(expected);
    });
    test("should return XXX for argument XXX", () => {
      const arg = "";
      const result = yourFunction(arg);
      const expected = "";
      expect(result).toEqual(expected);
    });
    test("should throw an exception if argument is XXX", () => {
      const arg = "";
      expect(() => {
        yourFunction(arg);
      }).toThrow("error info");
    });
  });
});
