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

  const myHeaders = new Headers({
    'Authorization': `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MjYzLTI1NTgiLCJpYXQiOjE2MzY1NjEyOTEsImV4cCI6MTYzNzE2NjA5MX0.vfhorM4QYafm9ZCRMdxJGVrjdh4fvlf8EXN13JS3gfW8tKwpSpgmkILi1qeFtJGMSfzb5YtaOFSY1Fm_6QzVDQ`,
    'Content-Type': 'application/json'
  });

  const myParams = {
    company: "",
    created_date: "",
    drug_barcode: "",
    drug_group: "",
    drug_kind: "",
    drug_name: "",
    sort_field: "",
    sort_type: "",
    status: ""
  }
  const resProduct: any = await fetch(`https://api-nhathuoc.medlink.vn/api/product/list?page=1&size=20`, {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify(myParams)
  })
  const data2 = await resProduct.json()

  console.log('keytest', data2)

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
