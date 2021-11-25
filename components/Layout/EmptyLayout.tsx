import React from 'react'

interface Props {
  children: any
}

const EmptyLayout = (props: Props) => {
  const { children } = props
  return (
    <>{children}</>
  )
}
export default EmptyLayout
