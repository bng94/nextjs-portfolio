import axios from "axios";
import { SERVER_URL } from "../config/config";

export async function loadData() {
  const response = await axios.get(`${SERVER_URL}/api/v1`);
  const data = response.data;

  return data;
}
