import api from './axios'

export default {
  async login(email: string, password: string) {
    const response = await api.post('/login', { email, password })
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('user', JSON.stringify(response.data.user))
    return response.data
  }
}

export async function logout() {
  await api.delete('/logout')
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
