import axios from 'axios'

export async function getPost(): Promise<void> {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response.data)
}
