import React from "react"

const Recipe = ({title, calories, image, ingredients}) =>{
    const styleIngr = {
        color :"#4a4545ad"
    }
    return(
        <div className="recipe">
            <h1 >{title}</h1>
            <p>calories : {Math.floor(calories)}</p>
            <img src={image} alt="recipe img"/>
            <ul>
                {ingredients.map(ingredient => (
                    <li style={styleIngr}>{ ingredient.text }</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe