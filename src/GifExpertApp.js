import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  //   const categories = ['One punch', 'Samurari X', 'Dragon ball']
  const [categories, setCategories] = useState(['One punch'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <AddCategory setCategories={setCategories} />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />
        })}
      </ol>
    </>
  )
}

export default GifExpertApp
