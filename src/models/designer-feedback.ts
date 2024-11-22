export interface DesignerFeeback {
  id: string;
  feedback_id: string;
  designer_id: string;
  wardrobe_id: string;
  feedback: string;
  created_at: string;
  updated_at: string;
}

/*
Column Name	Data Type	Description
id	UUID (primary key)	Unique identifier for the comment
feedback_id	UUID (foreign key to designer_feedback.id)	Foreign key linking the comment to designer feedback
designer_id	UUID (foreign key to users.id)	Foreign key linking the comment to the client (who is commenting)
feedback	TEXT	Text of the feedback from the designer
created_at	TIMESTAMP	Date when the comment was created
updated_at	TIMESTAMP	Date when the comment was last updated
*/
