import { GetStaticPaths, GetStaticPathsContext, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React, { ReactElement } from 'react'

interface Props {
  product: any
}

export default function ProductDetail(props: Props): ReactElement {
  const router = useRouter()
  const product: any = props.product
  const productId = router.query.productId
  return (
    <div>
      <Head>
        <title>Produt Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Product Detail</h1>
      <h3>Product id: {product.id}</h3>
      <h3>Product title: {product.title}</h3>
      <h3>Product author: {product.author}</h3>
      <h3>Product description: {product.description}</h3>
      <img src={product.imageUrl} />
      {/* <p>Product id: {productId}</p> */}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const newsRes: any = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=1`)
  const data = await newsRes.json()

  return {
    paths: data.data.map((product: any) => ({ params: { productId: product.id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {

  const contexProductId = context.params?.productId
  if (!contexProductId) return { notFound: true }

  const newsRes: any = await fetch(`https://js-post-api.herokuapp.com/api/posts/${contexProductId}`)
  const data = await newsRes.json()

  return {
    props: {
      product: data
    }
  }
}