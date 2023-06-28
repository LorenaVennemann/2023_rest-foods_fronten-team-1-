import api from "./Api";

const ItemService = () => ({
    getDataFromDB: async (id: number) => {
      const data = await api.get(`menu/${id}`);
      return data.data;
    },
  
    getAllDataFromDB: async () => {
      const response = await api.get("menu");
      return response.data;
    },
  });

  export default ItemService;