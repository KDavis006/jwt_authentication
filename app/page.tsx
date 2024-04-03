import {redirect} from 'next/navigation'
import {getSession, login, logout} from './lib'

export default async function Login() {
  const session = await getSession()
  return (
    <section>
      <form action={async (formdata)=>{
        'use server'
        if (formdata.get('username') === process.env.USERNAME_SECRET && formdata.get('password') === process.env.PASSWORD_SECRET) {
          await login(formdata)
          redirect('/Home')
        } else {
          console.log('login failed')
          redirect('/')
        }
      }}>
        <input type="username" name='username' id='username' placeholder='username' autoComplete='off' style={{color: 'black'}}/>
        <input type="password" name='password' id='password' placeholder='password' autoComplete='off' style={{color: 'black'}}/>
        <input type="name" name='name' id='name' placeholder='name' autoComplete='off' style={{color: 'black'}}/>
        <button type='submit'>Login</button>
      </form>

      <form action={async (formdata)=>{
        'use server'
        await logout()
        redirect('/')
      }}>
        <button type='submit'>Logout</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
