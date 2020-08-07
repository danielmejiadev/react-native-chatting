export interface MessageListParams {
  chatDialogId: string;
  sortDesc: 'date_sent';
  limit?: number;
  skip?: number;
}
