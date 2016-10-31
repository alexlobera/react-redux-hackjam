export const addComment = (title, body) => {
  return fetch('http://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1
    }),
  });
}
