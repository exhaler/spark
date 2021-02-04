export interface DiscoverCards {
  image: string;
  firstName: string;
  lastName: string;
  age: number;
}

export interface UserBalance {
  likes: number;
  message: number;
}

export interface Matches {
  image: number;
  firstName: number;
  online: boolean;
  liked?: boolean;
}

export interface Messages {
  image: string;
  firstName: string;
  lastName: string;
  online: boolean;
  reply: boolean;
  messageTime: string;
  latestMessage?: string;
}
