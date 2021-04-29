export const maybe = <T extends {}>(map: T, value: string | undefined) =>
  (value ? map[value as keyof T] : undefined) ?? undefined;
