export function hello(world) {
  return `Hello ${world}!`;
}

export function armandIsTheBest() {
  const words = ["armand", "is", "the", "best"];
  return words.map((word) => (word === "is" ? "is not" : word));
}
