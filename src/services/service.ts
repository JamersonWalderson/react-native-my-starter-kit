import { IService } from "../models/ServiceModel";
import ApiClient from "./api";

async function getService(): Promise<IService>{
  const response =  await ApiClient.get<IService>('/servicos/1/')
  return response.data
}

export const api = {
  getService,
}