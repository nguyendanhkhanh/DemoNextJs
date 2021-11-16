import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { } from 'react'

interface Props {
  products: any[]
}

export default function ProductList(props: Props) {
  const { products } = props
  return (
    <div>
      <Head>
        <title>List Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>List Product Home</h1>
      <ul>
        {products.map((item: any) => (
          <li>
            <Link href={`product/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {

  const newsRes: any = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=1`)
  const data = await newsRes.json()

  return {
    props: {
      products: data.data.map((item: any) => (
        {
          id: item.id,
          title: item.title,
        }
      ))
    }
  }
}
