import React from 'react'
import Head from 'next/head'

import Header from '@/components/Header'
import TodoList from '@/components/TodoList'


export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <title>Chakra Tasks</title>
      </Head>

      <Header />

      <TodoList />
    </React.Fragment>
  )
}