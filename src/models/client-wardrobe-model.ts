export interface ClientWardrobeModel {
  id: string;
  user_id: string;
  item_name: string;
  item_brand: string;
  item_type: ItemType;
  image_Url: string;
  footwear: FootwearTYPE;
  pairsWith: string[];
  comments: string[];
}
/*
Column Name	Data Type	Description
id	UUID (primary key)	Unique identifier for the wardrobe item
user_id	UUID (foreign key to users.id)	Foreign key to link the wardrobe item to a client
item_name	VARCHAR(255)	Name/description of the item (e.g., "Red dress", "Jeans")
item_type	VARCHAR(255)	Type of clothing (e.g., "Dress", "Pants", "Shirt")
image_url	VARCHAR(255)	URL or path to the image file of the clothing item
created_at	TIMESTAMP	Date when the wardrobe item was added
updated_at	TIMESTAMP	Date when the wardrobe item was last updated

*/

export enum FootwearTYPE {
  SNEAKER = "sneakers",
  DRESSSHOES = "dress-shoes",
  SANDALS = "sandals",
  BOOTS = "boots",
}

export enum ItemType {
  SHIRT = "shirt",
  LONGSLEEVE_SHIRT = "longsleeve-shirt",
  SHORTS = "shorts",
  PANTS = "pants",
  SWEATER = "sweater",
  FOOTWEAR = "footwear",
}
