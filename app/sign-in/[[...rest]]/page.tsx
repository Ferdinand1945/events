import React from 'react'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center'> <SignIn /></div>
}