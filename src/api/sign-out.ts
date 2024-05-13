import { api } from '@/lib/axio'

export async function signOut() {
  await api.post('/sign-out')
}
