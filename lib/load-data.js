import axios from "axios";
import { SERVER } from "../components/constants/variables";

export async function loadData() {
  const response = await axios.get(`${SERVER}/api/v1`);
  const data = response.data;

  return data;
}
