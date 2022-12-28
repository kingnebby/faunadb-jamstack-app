const axios = require("axios").default;

export const makeRequest = async (query, variables = {}) => {
  const url = "https://graphql.us.fauna.com/graphql";
  const body = {
    query: query,
    variables,
  };
  const headers = {
    Authorization: `Bearer ${process.env.FAUNADB_KEY}`,
  };
  const {
    data: { data, errors },
  } = await axios.post(url, body, { headers });

  if (errors) {
    console.log(errors);
    throw new Error(errors);
  }

  return data;
};
