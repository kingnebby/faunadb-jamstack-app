import { config } from "dotenv";
import { formattedResponse } from "./utils/formattedResponse";
import { CREATE_LINK } from "./utils/queries";
import { makeRequest } from "./utils/sendQuery";
config();

export async function handler(event, _context, _callback) {
  const { name, url, description } = JSON.parse(event.body);
  const variables = { name, url, description };

  try {
    const res = await makeRequest(CREATE_LINK, variables);
    const data = res.createLink;

    return formattedResponse(200, data);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, { err: "something went wrong" });
  }
}
