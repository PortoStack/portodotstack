import { API_URL, VERSION } from "@/config/app-config";
import axios from "axios";

export const api = axios.create({
  baseURL: `${API_URL}/${VERSION}`,
  timeout: 10000,
});
