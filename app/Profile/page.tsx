import {redirect} from 'next/navigation'
import Image from 'next/image'
import {getSession, logout} from '../lib'
import person from '../../mockdata'

export default async function page() {
 const session = await getSession()
 const user = session?.user
 if (!user) { 
  console.log("Session Timeout") 
  redirect('/')
 }
  return (
    <div>
     <h1>Welcome {user.username}!</h1>
     <h2>Name: {person.first_name} {person.last_name}</h2>
     <img className="w-20 h-20 rounded-full" src={person.avatar} alt="Rounded avatar" />
      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
            <dd className="text-lg font-semibold">yourname@flowbite.com</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
          <dd className="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
          <dd className="text-lg font-semibold">+00 123 456 789 / +12 345 678</dd>
        </div>
      </dl>
     <form action={async ()=>{
      'use server'
      redirect('/Home')
     }}>
      <button type='submit'>Home</button>
     </form>
     <form action={async ()=>{
        'use server'
        await logout()
        redirect('/')
      }}>
        <button type='submit'>Logout</button>
      </form>
    </div>
  )
}
