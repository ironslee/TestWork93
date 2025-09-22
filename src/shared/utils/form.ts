export const required3 = (v: string) =>
  !v || v.trim().length < 3 ? "required 3 symbols minimum" : null;
