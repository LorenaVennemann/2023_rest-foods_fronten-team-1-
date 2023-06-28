import axios from 'axios';

export interface User {
  id: number;
  username: string;
  password: string;
  role: Role;
}

export interface Role {
  id: number;
  roleName: string;
}

export class UserService {
  private static readonly RESOURCE_PATH = '/users';

  public static async getAllUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(this.RESOURCE_PATH);
    return response.data;
  }

  public static async getUserById(id: number): Promise<User> {
    const response = await axios.get<User>(`${this.RESOURCE_PATH}/${id}`);
    return response.data;
  }

  public static async createUser(user: User): Promise<User> {
    const response = await axios.post<User>(this.RESOURCE_PATH, user);
    return response.data;
  }

  public static async updateUser(user: User): Promise<User> {
    const response = await axios.put<User>(`${this.RESOURCE_PATH}/${user.id}`, user);
    return response.data;
  }

  public static async deleteUser(id: number): Promise<void> {
    await axios.delete(`${this.RESOURCE_PATH}/${id}`);
  }

  public static async getAllRoles(): Promise<Role[]> {
    const response = await fetch('/roles');
    const data = await response.json();
    return data as Role[];
  }

  public static async login(username: string, password: string): Promise<User> {
    const response = await axios.post<User>('/login', { username, password });
    return response.data;
  }
}