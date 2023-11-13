export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserRes {
  message: string;
  status: string;
  data: {
    user: User;
  };
}
