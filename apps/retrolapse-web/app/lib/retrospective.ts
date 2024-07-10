export interface Retrospective {
  id: string;
  title: string;
  activities: Activity[];
  created_at: Date;
}

export interface Activity {
  title: string;
  items: ActivityItem[];
}

export interface ActivityItem {
  description: string;
}

export function parseRetrospectives(data?: unknown): Retrospective[] | undefined {
  if (!data) return;
  // @ts-expect-error invalid type
  if (!data['retrospectives']) return;
  // @ts-expect-error force type
  return data['retrospectives'].map(parseRetrospective).filter(r => r);
}

export function parseRetrospective(data?: unknown): Retrospective | undefined {
  if (!data) return;

  // @ts-expect-error force type
  return { ...data, created_at: new Date(data.created_at), activities: [] } as Retrospective;
}