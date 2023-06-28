import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { Burger } from "../Types/Burger";
import { Console } from "console";

const BurgerService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAllBurgers: async () => {
    const data = await api.get("burger/");
    console.log("haaallloo");
    console.log(data);
    return data["data"]; 
  },
  
  getBurgerById: async (id: number) => {
    const data = await api.get(`burger/${id}`);
    return data["data"];
  },

  createBurger: async (burger: Burger) => {
    const data = await api.post("burger", burger);
    return data["data"];
  },

  updateBurger: async (burger: Burger) => {
    const data = await api.put(`burger/${burger.id}`, burger);
    return data["data"];
  },

  deleteBurger: async (id: number) => {
    const data = await api.delete(`burger/${id}`);
    return data["data"];
  },
});

export default BurgerService;