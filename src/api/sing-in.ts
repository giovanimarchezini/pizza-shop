import { api } from '@/lib/axio'

export interface SingInBody {
  email: string
}

export async function singIn({ email }: SingInBody) {
  await api.post('/authenticate', { email })
}
