export default {
    axiosConfig: () => {
      return {
        baseURL: process.env.REACT_APP_API_CLIENT+"/api",
        baseURL_CRM: process.env.REACT_APP_API_CLIENT_CRM,
        timeout: 20000,
        responseType: 'json'
      }
    },
  }