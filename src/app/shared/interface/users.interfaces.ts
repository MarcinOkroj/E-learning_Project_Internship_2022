export interface UsersTableDataInterface {
  [key: string]: string,
  name: string,
  lastname: string,
  email: string,
  company: string,
  role: string,
  options: string
}

export interface UserAttribiutes {
  id: number;
  name: string;
}

export interface UserPostInterface {
  id: number,
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string,
  companyId: number,
  authority: string
}
