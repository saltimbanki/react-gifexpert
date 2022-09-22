import React, { useState } from 'react'
import { render } from 'react-dom';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {
    const estado = [''];
    const [categories, setCategories] = useState(estado);
    // console.log(categories, setCategories);

    const onAddCategory = (newCategory)=>{
        
        if(categories.includes(newCategory)){
            //evitar duplicados
            return;
        }
        
        setCategories([newCategory, ...categories]);//evitar duplicado
        // setCategories(Array.from(new Set([newCategory, ...categories])));//evitar duplicado
        // setCategories(categories.concat('valorant'));
        
    }

    return (
      <>
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory
          onNewCategory={(value) => {
            onAddCategory(value);
          }}
        />

        {/* listado de gif */}

        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
        {/* gif item */}
      </>
    );
}