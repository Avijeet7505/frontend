
import { IconLogin } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div>page
            <Link href="/login">login page</Link><br />
            <Link href="/signup">sign up page</Link>
            <h1 style={{ textAlign: 'center', fontSize: 50 }}>Welcome to Home</h1>

            <img src="/next.svg" alt="" />

            <button className='mybtn'>My Button</button>
            <button className='btn btn-primary'><IconLogin size={100} color='red'></IconLogin> Bootstrap</button>
        </div>
    )
}

export default Home