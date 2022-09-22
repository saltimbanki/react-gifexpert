import { useState } from "react";

export const AddCategory = ({onNewCategory})=>{

    const initialState = '';
    const [inputValue, setInputValue] = useState(initialState);

    const onInputChange = (event) => {
        // console.log(event.target.value);
        setInputValue(event.target.value);
    }

    // const {categories, setCategories} = props;//desestructurar las props


    const onSubmit = (event)=>{
        event.preventDefault();
        // console.log(inputValue);
        // setCategories([...categories, inputValue]);
        if(inputValue.trim().length <= 1){
          return;
        }

        // setCategories([ inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');//limpiar el input
        
    }

    return (
      // <form onSubmit={(event) => onSubmit(event)}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          // onChange={(event) => onInputChange(event)}
          //es lo mismo que la linea anterior pero simplificado
          onChange={onInputChange}
          autoFocus
        />
      </form>
    );
}