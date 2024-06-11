import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from './UserProfile'
import { RootState } from './store'
import { User } from './features/UserSlice'

const UserList = () => {
    const users = useSelector((state:RootState) => state.users)

  return (
    <div className='flex flex-col gap-3 flex-wrap'>
        {users.map((user)=>{
            return <UserProfile user={user} key={user.id}/>
        })}

    </div>
  )
}

export default UserList