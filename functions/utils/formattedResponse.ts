export function formattedResponse(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body),
  };
}
