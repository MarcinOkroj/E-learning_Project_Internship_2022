//status: Start, Continue, View again, Sign up
export interface TileInterface {
  id: number;
  name: string,
  date: string,
  progress?: string,
  status: string,
  canUserLeave?: boolean,
  backgroundImg: string,
}
