export const GET_LINKS = `
query {
  allLinks {
    data {
      _id
      name
      url
      description
      archived
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

export const UPDATE_LINK = `
mutation ($id: ID!, $url: String!, $name: String!, $description: String!, $archived: Boolean!) {
  updateLink (
    id: $id,
    data: {
      url: $url,
      name: $name,
      description: $description,
      archived: $archived
    }
  )
  {
    name
    url
    description
    _id
    archived
  }
}`;

export const DELETE_LINK = `
mutation($id: ID!) {
  deleteLink (id: $id) {
    _id
  }
}`;
