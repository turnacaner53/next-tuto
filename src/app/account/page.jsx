import { redirect } from 'next/navigation'
import React from 'react'

export default function Account() {
  const userProfileInfo = null

  if(userProfileInfo === null) redirect('/profile')
    
  return (
    <div>Account Page</div>
  )
}
