export interface Message {
  id: string;
  attachments: string[];
  chatDialogId: string;
  createdAt: string;
  dateSent: number;
  deliveredIds: number[]
  message: string;
  readIds: number[];
  recipientId: number;
  senderId: number;
  updatedAt: string
  viewsCount: number;
  read: number
}
