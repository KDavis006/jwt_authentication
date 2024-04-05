import {redirect} from 'next/navigation'
import {getSession, logout} from '../lib'

export default async function Home() {
 const session = await getSession()
 const user = session?.user
 if (!user) { 
  console.log("Session Timeout") 
  redirect('/')
 }
  return (
    <div>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">Home</span>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <form action={async ()=>{
                'use server'
                redirect('/Profile')
              }}>
                <button type='submit' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Profile</button>
              </form>
            </li>
            <li>
              <form action={async ()=>{
                'use server'
                await logout()
                redirect('/')
              }}>
                <button type='submit' className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-800">
        <h1 className="text-9xl font-bold mb-8">Home</h1>
    </div>
    </div>
  )
}