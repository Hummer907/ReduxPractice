import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList'
import { useDispatch } from 'react-redux'


function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();
    

    const addNewUser = (e :React.FormEvent) =>{
        e.preventDefault();
        console.log(name,email,age);
        setAge('');
        setName('');
        setEmail('');
    }
  

  return (
   <div className=' flex h-[100vh] w-[100vw] flex-col gap-4 items-center justify-center'>
    <div className='flex justify-center  flex-col gap-2'>
        <h1>User Form</h1>
        <form  onSubmit={addNewUser} className='flex flex-col gap-2'>
            <input className='border-2 p-2' placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)} type='text'/>
            <input className='border-2 p-2' placeholder="Email" value={email} type='text'  onChange={(e) => setEmail(e.target.value)}/>
            <input className='border-2 p-2' placeholder="Age" value={age} type='text'  onChange={(e) => setAge(e.target.value)}/>
            <button  type='submit' className='bg-green-500 p-2 text-white rounded-lg'>ADD User</button>
        </form>
       
    </div>
    <section className='flex justify-center flex flex-col'>
        <h1>Users List</h1>
        <UserList/>

    </section>
   </div>
  )
}

export default App
