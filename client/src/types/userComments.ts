export interface UserComment {
  id: string,
  text: string,
  name: string,
  email: string,
  homepage: string | null,
  headCommentId: string | null,
  userId: string,
  createdAt: Date,
}
