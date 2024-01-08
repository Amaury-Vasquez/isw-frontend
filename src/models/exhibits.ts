interface IExhibitRoom {
  room_name: string;
  exhibits: string[];
  capacity: number;
  description: string;
  is_accessible: boolean;
}

export interface IExhibit {
  room: IExhibitRoom;
}
