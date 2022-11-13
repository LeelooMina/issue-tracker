export interface Issue{
  title: string,
  description: string,
  createdBy: string,
  claimedBy: string, //UserID or string "none"
  type: string, //Idea, Feature, Bug,
  projectID: string,
  ID: number, //Issue ID
  claimed: boolean; 
  done: boolean;

}
