export interface DesignerModel {
  id: string;
  user_id: string;
  my_client_id?: string;
  specialty: Specialty;
  cost: string;
  created_at: string;
  updated_at: string;
}

/*

Column Name	Data Type	Description
id	UUID (primary key)	Unique identifier for the designer (same as user.id)
user_id	UUID (foreign key to users.id)	Foreign key to link to the user table
cost	DECIMAL(10, 2)	Designer's hourly rate or cost
specialty	VARCHAR(255)	Designer's specialty (e.g., formal, casual, etc.)
created_at	TIMESTAMP	Date when the designer data was created
updated_at	TIMESTAMP	Date when the designer data was last updated
*/

export enum Specialty {
  MIX = "mix",
  PREPPY = "preppy",
  RETRO = "retro",
  HIPSTER = "hipster",
}
