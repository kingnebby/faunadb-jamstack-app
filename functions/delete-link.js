import { config } from "dotenv";
import { formattedResponse } from "./utils/formattedResponse";
import { CREATE_LINK, DELETE_LINK } from "./utils/queries";
import { makeRequest } from "./utils/sendQuery";
config();

export async function handler(event, _context, _callback) {
  const { _id } = JSON.parse(event.body);
  const variables = { id: _id };

  try {
    const res = await makeRequest(DELETE_LINK, variables);
    const data = res.deleteLink;

    return formattedResponse(200, data);
  } catch (error) {
    console.log(error);
    return formattedResponse(500, { err: "something went wrong" });
  }
}
