import api from './axios';

export async function getTrainings() {
    const response = await api.get(`/trainings`)
    return response.data
  }