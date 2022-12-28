require("dotenv").config();
const axios = require("axios").default;

exports.handler = async (event, _context, _callback) => {
  const GET_LINKS = `
  query {
    allLinks {
      data {
        _id
        name
        url
        description
      }
    }
  }
  `;

  const url = "https://graphql.us.fauna.com/graphql";
  const body = {
    query: GET_LINKS,
    variables: {},
  };
  const headers = {
    Authorization: `Bearer ${process.env.FAUNADB_KEY}`,
  };
  const { data } = await axios.post(url, body, { headers });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
