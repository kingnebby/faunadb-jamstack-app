import { config } from "dotenv";
import { formattedResponse } from "./utils/formattedResponse";
import { GET_LINKS } from "./utils/queries";
import { makeRequest } from "./utils/sendQuery";
config();

export async function handler(event, _context, _callback) {
  try {
    const res = await makeRequest(GET_LINKS);
    const data = res.allLinks.data;

    return formattedResponse(200, data);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, { err: "something went wrong" });
  }
}
