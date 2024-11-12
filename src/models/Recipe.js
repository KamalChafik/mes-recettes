class Recipe {
    constructor(name, description, ingredients = [], steps = [], categories = [], country = "") {
      this.name = name;
      this.description = description;
      this.ingredients = ingredients;
      this.steps = steps;
      this.categories = categories;
      this.country = country;
    }
  }
  
  export default Recipe;