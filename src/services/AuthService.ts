import axios from 'axios'

const API_URL = 'http://localhost:80/api'

export default {
  async login(email: string, password: string) {
    const response = await axios.post(`${API_URL}/login`, { email, password })
    localStorage.setItem('token', response.data.token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
    return response.data
  }
}
