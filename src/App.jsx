import React, { useEffect, useState } from 'react';
import Recipe from './models/Recipe';
import { db } from './middlewares/firebase';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes'));
        console.log(querySnapshot)
        const recipeData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRecipes(recipeData);
      } catch (error) {
        console.error('Erreur lors de la récupération des recettes :', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRecipes();
  }, []);
  

  if (loading) {
    return <p>Chargement des recettes...</p>;
  }

  return (
    <div className="container">
      <h1>TEST</h1>
      {
        console.log(recipes)
      }
    </div>
  );
};

export default App;
