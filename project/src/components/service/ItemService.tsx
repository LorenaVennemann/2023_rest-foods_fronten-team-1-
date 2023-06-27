import { defaultAxiosInstance } from "./Api";



const PublisherService = () => ({


    getDataFromDB: async (id: number) => {
      const data = await defaultAxiosInstance.get(`MenuItem/${id}`);
      return data.data;
    },

    getAllDataFromDB: async () => {
      const response = await defaultAxiosInstance.get("MenuItem");
      return response.data;
    },
  
  });

  export default PublisherService;