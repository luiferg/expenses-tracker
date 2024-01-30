import { UserRound } from 'lucide-react'
import SectionWrapper from './section-wrapper'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useGetUserInfo } from '@/hooks/useGetUserInfo'

const UserInfo = () => {
  const { userName, userPhotoURL } = useGetUserInfo()

  return (
    <SectionWrapper id='userInfo' className='flex flex-row gap-4 items-center'>
      <Avatar className='w-14 h-14'>
        <AvatarImage
          src={userPhotoURL}
          alt={`${userName} picture`}
          className='w-14 h-14'
          referrerPolicy='no-referrer'
        />
        <AvatarFallback>
          <UserRound className='w-6 h-6' />
        </AvatarFallback>
      </Avatar>
      <p>Hi, {userName}</p>
    </SectionWrapper>
  )
}

export default UserInfo
