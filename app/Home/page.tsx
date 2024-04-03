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
     <form action={async ()=>{
      'use server'
      redirect('/Profile')
     }}>
      <button type='submit'>Profile</button>
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