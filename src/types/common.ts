export type User = {
  id: number;
  email: string;
  confirmed_at: string;
};

export interface LoginResponse {
  success: boolean;
  data: {
    user: User;
    token: string;
  };
}

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export interface AuthContextProps {
  token: string | null;
  user: User | null;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
}

export interface AnnouncementPayload {
  message: string;
  numbers: number[];
}
