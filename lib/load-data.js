import axios from "axios";
import { SERVER } from "../config/config";

export async function loadData() {
  const response = await axios.get(`${SERVER}/api/v1`);
  const data = response.data;

  return data;
}
