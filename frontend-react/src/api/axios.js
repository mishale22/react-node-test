import axios from 'axios';
const URL = 'http://localhost:4000/posts/';

export async function getData() {
  return await axios.get(URL);
}
