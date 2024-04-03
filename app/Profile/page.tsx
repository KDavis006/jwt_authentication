import {redirect} from 'next/navigation'
import {getSession, logout} from '../lib'

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
     <h2>Name: {user.name}</h2>
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
