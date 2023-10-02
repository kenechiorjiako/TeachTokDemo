export function convertTime(sec: number): string {
  return new Date(sec * 1000).toISOString().substring(14, 19);
}
