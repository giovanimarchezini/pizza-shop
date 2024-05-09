import { api } from '@/lib/axio'

interface GetManagedResponseRestaurant {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedResponseRestaurant>(
    '/managed-restaurant',
  )

  return response.data
}
