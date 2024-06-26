import { api } from '@/lib/axio'

export interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}
