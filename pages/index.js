import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
//import Layout from './layout.pages'
// import Dashboard from './dashboard'



import SignUp from './signup'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <SignUp />
  )
}
