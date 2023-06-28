import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { Burger } from "../Types/Burger";

const BurgerService = (api: AxiosInstance = defaultAxiosInstance) => {
  const login = async (username: string, password: string) => {
    try {
      const response = await api.post('/login', { username, password });
      return response.data.access_token;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getAllBurgers = async () => {
    // Führe die Authentifizierung durch, bevor du auf die Endpunkte zugreifst
    const token = await login('username', 'password');
    const data = await api.get("burger/", { headers: { Authorization: `Bearer ${token}` } });
    return data.data;
  };
  
  const getBurgerById = async (id: number) => {
    // Führe die Authentifizierung durch, bevor du auf die Endpunkte zugreifst
    const token = await login('username', 'password');
    const data = await api.get(`burger/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return data.data;
  };

  const createBurger = async (burger: Burger) => {
    // Führe die Authentifizierung durch, bevor du auf die Endpunkte zugreifst
    const token = await login('username', 'password');
    const data = await api.post("burger", burger, { headers: { Authorization: `Bearer ${token}` } });
    return data.data;
  };

  const updateBurger = async (burger: Burger) => {
    // Führe die Authentifizierung durch, bevor du auf die Endpunkte zugreifst
    const token = await login('username', 'password');
    const data = await api.put(`burger/${burger.id}`, burger, { headers: { Authorization: `Bearer ${token}` } });
    return data.data;
  };

  const deleteBurger = async (id: number) => {
    // Führe die Authentifizierung durch, bevor du auf die Endpunkte zugreifst
    const token = await login('username', 'password');
    const data = await api.delete(`burger/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return data.data;
  };

  return {
    getAllBurgers,
    getBurgerById,
    createBurger,
    updateBurger,
    deleteBurger,
  };
};

export default BurgerService;