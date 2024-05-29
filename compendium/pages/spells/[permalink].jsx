import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Spell from 'src/components/spell'
import { useRouter } from 'next/router'
import Layout from 'src/layouts/layout'

export default function Index({ fallbackSpell, apiHostUrl }) {
  const title = 'Poderes'
  const [spell, setSpell] = useState(fallbackSpell)

  const router = useRouter()
  const permalink = router.query.permalink

  useEffect(() => {
    async function loadSpell() {
      const result = await fetch(`${apiHostUrl}/api/spells?q[permalink_cont]=${router.query.permalink}`)
      const response = await result.json()
      setSpell(response[0])
    }

    if (!spell && permalink) {
      loadSpell()
    }
  }, [permalink])

  if (!spell) return;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <Spell spell={spell} />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const apiHostUrl = process.env.CORE_HOST_URL
  const permalink = params.permalink

  // Initial fetch to provide a fallback spell for build time rendering
  const fallbackSpell = await fetch(`${apiHostUrl}/api/spells?q[permalink_cont]=${permalink}`)
    .then((res) => res.json())
    .then((data) => data[0] || null)

  return {
    props: {
      fallbackSpell,
      apiHostUrl
    }
  }
}

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }

  // const apiHostUrl = process.env.CORE_HOST_URL
  // const spellSet = await loadSpells(apiHostUrl)

  // const paths = Array.from(spellSet).map(spell => ({
  //   params: { fallbackSpell: spell.permalink },
  // }))

  // // { fallback: false } means other routes should 404
  // return { paths, fallback: false }

  return {
    paths: [],
    fallback: true,
  };
}

async function loadSpells(page, spellSet = null) {
  const apiHostUrl = process.env.CORE_HOST_URL

  // Build Params to get multiple Spells
  if (!spellSet) {
    spellSet = new Set()
  }

  // Make the request and handle the json
  const result = await fetch(`${apiHostUrl}/api/spells?page=${page}`)
  const response = await result.json()

  // Filter spells with the same permalink (in case the same API call executes twice)
  response.filter(spell => {
    if (!spellSet.has(spell.permalink)) {
      spellSet.add(spell)
      return true
    }
    return false
  })

  // Loop recurviely over next pages.
  if (!JSON.parse(result.headers.get('X-LastPage'))) {
    return loadSpells(page + 1, spellSet)
  } else {
    return spellSet
  }
}
