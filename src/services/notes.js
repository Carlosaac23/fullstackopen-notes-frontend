import axios from "axios";

const baseURL = "http://localhost:3001/api/notes";

function getAll() {
  const req = axios.get(baseURL);
  const notExisting = {
    id: 1000,
    content: "This note is not saved to server",
    important: true,
  };
  return req.then((res) => res.data.concat(notExisting));
}

function create(newObject) {
  const req = axios.post(baseURL, newObject);
  return req.then((res) => res.data);
}

function update(id, newObject) {
  const req = axios.put(`${baseURL}/${id}`, newObject);
  return req.then((res) => res.data);
}

export { getAll, create, update };
