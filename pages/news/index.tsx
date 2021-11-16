import { GetStaticProps, GetStaticPropsContext } from 'next'
import React, { ReactElement } from 'react'

interface Props {
  news: any[]
}

export default function News(props: Props) {
  const { news } = props
  return (
    <div>
      <h1>News Page</h1>
      {news.map(item => (
        <>
          <h2>{item.title}</h2>
          <h4>{item.description}</h4>
          <img src={item.imageUrl}/>
        </>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context: GetStaticPropsContext) => {

  const newsRes: any = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=1`)
  const data = await newsRes.json()

  return {
    props: {
      news: data.data.map((item: any) => (
        {
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl
        }
      ))
    }
  }
}