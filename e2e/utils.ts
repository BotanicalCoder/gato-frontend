export function randEmail(prefix: string = 'player'): string {
  const rnd = Math.random().toString(36).slice(2, 8);
  return `${prefix}.${rnd}@gato.dev`;
}