import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])
  // useEffect(() => {
  //   getGifs(category).then((imgs) => {
  //     setImages(imgs)
  //   })
  // }, [category])

  const { data: images, loading } = useFetchGifs(category)
  return (
    <>
      <h3>{category}</h3>

      {/* {loading ? <p>Loading</p>: null} */}
      {loading && <p>Loading</p>}
      {/* Si el primero es true, entonces evalua <p>Loading</p>
      Si no, no hace nada */}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {}

export default GifGrid
