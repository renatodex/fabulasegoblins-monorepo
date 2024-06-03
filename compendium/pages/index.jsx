import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Layout from 'src/layouts/layout'

export default function Index() {
  const title = 'Compêndio do Aventureiro'
  const [visibility, setVisibility] = useState({
    register: false,
    login: false
  })

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Compêndio Digital do Fábulas & Goblins" />
      </Head>
      <img src="/header_logo.png" className="m-auto" width={420}></img>
      <div className="mx-6 mt-4">
        <h1 className="text-4xl font-bold font-serif pt-10 px-4">{title}</h1>
        <p className="mt-5 text-sm px-4">
          Aqui você encontra todo o conteúdo que criamos para você usar em suas aventuras dentro do universo do
          <span className="font-bold"> Fábulas &amp; Goblins</span>.
        </p>

        <div className='grid grid-cols-2 md:grid-cols-3 mt-5 text-sm px-4 gap-3 md:gap-5'>
          <a href="/spells" className='p-4 border border-slate-200 rounded-xl bg-slate-500'>
            🧙‍♂️ Poderes
          </a>

          <div className='p-4 border border-slate-900 rounded-xl bg-gray-500 cursor-not-allowed'>
            🔒 Inimigos
          </div>

          <div className='p-4 border border-slate-900 rounded-xl bg-gray-500 cursor-not-allowed'>
            🔒 Itens
          </div>

          <div className='p-4 border border-slate-900 rounded-xl bg-gray-500 cursor-not-allowed'>
            🔒 Aventuras
          </div>

          <div className='p-4 border border-slate-900 rounded-xl bg-gray-500 cursor-not-allowed'>
            🔒 Fichas Prontas
          </div>
        </div>
      </div>
    </Layout>
  )
}
