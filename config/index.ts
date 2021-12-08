export default {
  axiosConfig: () => {
    return {
      baseURL: process.env.REACT_APP_API_CLIENT + "/api",
      baseURL_CRM: process.env.REACT_APP_API_CLIENT_CRM,
      timeout: 20000,
      responseType: 'json'
    }
  },
}

export const imagePath = `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images`
export const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX