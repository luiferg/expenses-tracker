export const useGetUserInfo = () => {
  const { userName, userPhotoURL, userID, isAuth } = JSON.parse(
    localStorage.getItem('auth') || '{}'
  )
  return { userName, userPhotoURL, userID, isAuth }
}
