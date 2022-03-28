import React from 'react'

export const GifGridItem = ({ title, url }) => {
  //   console.log(props)
  // console.log(title, url)
  return (
    <div className="card animate__animated animate__bounceIn">
      <img src={url} alt={title} />
      <p> {title}</p>
    </div>
  )
}
