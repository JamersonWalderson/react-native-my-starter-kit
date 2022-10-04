import ApiClient from "./api";

async function getService(): Promise<any>{
  try {
    const response =  await ApiClient.get<any>('/servicos/1/')
    return response.data
    
  } catch (error) {
    console.error(error)
  }
}

export const api = {
  getService,
}