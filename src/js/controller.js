const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=56b00414-7c78-4f8d-a174-1d3f182bb92e'
    );
    const data = await res.json();

    if(!res.ok) {throw new Error(`${data.message}(${res.status})`);}

      for (let recipe of data.data.recipes){
      console.log(recipe);
      }


      // recipes = {
      //   id: recipes.id,
      //   title: recipes.title,
      //   publisher: recipes.publisher,
      //   sourceUrl: recipes.source_url,
      //   image: recipes.image_url,
      //   servings: recipes.servings,
      //   cookingTime: recipes.cooking_time,
      //   ingredients: recipes.ingredients
      // }
      
    console.log(data);

  } catch (err) {
    alert(err);
  }
};
showRecipe();
