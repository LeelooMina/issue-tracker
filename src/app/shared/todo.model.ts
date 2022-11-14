export interface ToDo {
  title: string,
  description: string,
  createdBy: string,
  type: string,
  issueID: string,
  userID: string,
  todo?: boolean,
  doing?: boolean,
  done?: boolean,
}
