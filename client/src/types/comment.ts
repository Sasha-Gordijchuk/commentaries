import { User } from './user';

export interface Comment {
  id: string,
  text: string,
  headCommentId: string | null,
  createdAt: Date,
  UserId: string,
  User: User,
}
