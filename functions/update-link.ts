import { config } from "dotenv";
import { formattedResponse } from "./utils/formattedResponse";
import { UPDATE_LINK } from "./utils/queries";
import { makeRequest } from "./utils/sendQuery";
config();

export async function handler(event, _context, _callback) {
  const { name, url, description, archived, _id } = JSON.parse(event.body);
  const variables = { name, url, description, archived, id: _id };

  try {
    const res = await makeRequest(UPDATE_LINK, variables);
    const data = res.updateLink;

    return formattedResponse(200, data);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, { err: "something went wrong" });
  }
}
