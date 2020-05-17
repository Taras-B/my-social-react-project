import { instance, GetItemType } from './api'
import { profileAPI } from './profileAPI'

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data)
  },
  follow(userId: number) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: number) {
    console.warn('Obsolote method. Please profileAPI object')
    return profileAPI.getProfile(userId)
  },
}
