export interface Issue{
  title: string,
  description: string,
  createdBy: string,
  claimedBy: string, //UserID or string "none"
  type: string, //Feature Request, Bug, Other Task
  projectID: string,
  ID: string, //Issue ID
  claimed: boolean;
  done: boolean;

}
