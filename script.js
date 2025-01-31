document.getElementById('recipe-form').addEventListener('submit', addRecipe);

let recipes = [];

function addRecipe(event) {
    event.preventDefault();

    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('recipe-ingredients').value;
    const instructions = document.getElementById('recipe-instructions').value;

    const recipe = {
        id: Date.now(),
        name,
        ingredients,
        instructions
    };

    recipes.push(recipe);
    displayRecipes();
    document.getElementById('recipe-form').reset();
}

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button class="delete-button" onclick="deleteRecipe(${recipe.id})">Delete</button>
        `;
        recipeList.appendChild(recipeCard);
    });
}

function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id);
    displayRecipes();
}
