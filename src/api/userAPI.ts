import { instance, GetItemType, APIResponseType } from './api'
// import { profileAPI } from './profileAPI'

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data)
  },
  follow(userId: number) {
    return instance
      .post<APIResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then((res) => res.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then((res) => res.data) as Promise<APIResponseType>
  },
}
