import { describe, it, expect } from "vitest";
import { isBalanced } from "../src/01-balanced-brackets";

describe("isBalanced", () => {
  it('"()" => true', () => {
    expect(isBalanced("()")).toBe(true);
  });
  it('")" => false', () => {
    expect(isBalanced(")")).toBe(false);
  });
});
