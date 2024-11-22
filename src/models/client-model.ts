export interface ClientModel {
  id: string;
  user_id: string;
  style_preference: StylePreference;
  my_designer_id?: string;
  budget: Budget;
  age: string;
  created_at: string;
  updated_at: string;
}

export enum StylePreference {
  MIX = "mix",
  PREPPY = "preppy",
  RETRO = "retro",
  HIPSTER = "hipster",
}

export enum Budget {
  FIFTY_ONEHUNDRED = "50-100",
  ONEHUNDRED_TWOHUNDRED = "100-200",
  TWOHUNDRED_THREEFIFTY = "200-350",
  THREEFIFTY_FIVEHUNDRED = "350-500",
  FIVEHUNDRED = "500+",
}
