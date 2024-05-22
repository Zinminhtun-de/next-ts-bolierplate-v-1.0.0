export interface RoundsCardResponse {
  data: {
    data: RoundsCardData[];
    betOpenTime: string;
    betCloseTime: any;
  };
}

export interface RoundsCardData {
  _id: string;
  roundId: RoundId;
  winningNumber: string;
  set: string;
  value: string;
  resultDate: string;
  announceTime: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RoundId {
  _id: string;
  endTime: string;
  untilEndTime: string;
  announceTime: string;
  gameType: string;
  roundName: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  endDate: string;
  openTime: string;
}
