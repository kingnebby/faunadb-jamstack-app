export const GET_LINKS = `
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

export const CREATE_LINK = `
mutation ($url: String!, $name: String!, $description: String!) {
  createLink (data: {url: $url, name: $name, description:$description, archived: false})
  {
    name
    url
    description
    _id
    archived
  }
}
`;
