import React from 'react'
import { Link } from 'react-router-dom'
import { ChatsList, Chats } from '../components'

function Home() {
  return (
    <>
    <ChatsList/>
    <Chats/>
    </>
  )
}

export default Home
