import Convert from "../src";

test("valid black", () => {
  expect(Convert([0, 0, 0])).toEqual([0, 0, 0]);
});

test("valid white", () => {
  expect(Convert([255, 255, 255])).toEqual([0, 0, 100]);
});

test("valid red", () => {
  expect(Convert([255, 0, 0])).toEqual([0, 100, 50]);
});

test("valid green", () => {
  expect(Convert([0, 255, 0])).toEqual([120, 100, 50]);
});

test("valid blue", () => {
  expect(Convert([0, 0, 255])).toEqual([240, 100, 50]);
});

test("valid midnight blue", () => {
  expect(Convert([44, 62, 80])).toEqual([210, 29, 24]);
});