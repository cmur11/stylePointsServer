export interface WardrobeAssociations {
  id: string;
  client_id: string;
  wardrobe_id_1: string;
  wardrobe_id_2: string;
  wardrobe_id_3: string;
  wardrobe_id_4: string;
  created_at: string;
  updated_at: string;
}

/*
id	UUID (primary key)	Unique identifier for the association
client_id	UUID (foreign key to users.id)	Foreign key to link to the client
wardrobe_id_1	UUID (foreign key to client_wardrobes.id)	First wardrobe item in the association
wardrobe_id_2	UUID (foreign key to client_wardrobes.id)	Second wardrobe item in the association
created_at	TIMESTAMP	Date when the association was created
updated_at	TIMESTAMP	Date when the association was last updated
*/
