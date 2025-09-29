import { api } from './client'

export type UserProfile = {
  email: string
  displayName: string
  points: number
  streakCount: number
  badges: string[]
}

export async function getProfile(){
  const { data } = await api.get<UserProfile>('/api/me')
  return data
}