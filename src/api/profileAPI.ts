import { ProfileType } from './../types/types'
import { instance } from './api'
export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status })
  },
  savePhoto(photo: any) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile)
  },
}
