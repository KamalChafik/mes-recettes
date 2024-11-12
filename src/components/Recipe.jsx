import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div className="box">
      <h1 className="title is-4">{recipe.name}</h1>
      <p className="subtitle is-6">{recipe.description}</p>
      <div className="content">
        <h2 className="title is-5">Ingrédients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.name}: {ingredient.quantity}</li>
          ))}
        </ul>
        <h2 className="title is-5">Étapes</h2>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <p><strong>Catégories :</strong> {recipe.categories.join(', ')}</p>
        <p><strong>Pays d'origine :</strong> {recipe.country}</p>
      </div>
    </div>
  );
};

export default Recipe;
