export interface ClientComments {
  id: string;
  feedback_id: string;
  comment_id?: string; // if client responds with comment
  client_id: string;
  wardrobe_id: string;
  comment: string;
  created_at: string;
  updated_at: string;
}

/*
Column Name	Data Type	Description
id	UUID (primary key)	Unique identifier for the comment
feedback_id	UUID (foreign key to designer_feedback.id)	Foreign key linking the comment to designer feedback
client_id	UUID (foreign key to users.id)	Foreign key linking the comment to the client (who is commenting)
comment	TEXT	Text of the comment from the client
created_at	TIMESTAMP	Date when the comment was created
updated_at	TIMESTAMP	Date when the comment was last updated
*/
