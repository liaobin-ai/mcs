export function setupCrafting() {
    const craftingPanel = document.getElementById('crafting-panel');
    const craftingList = document.getElementById('crafting-list');

    const recipes = [
        { name: '木剑', ingredients: ['木头 x 2'] },
        { name: '石斧', ingredients: ['石头 x 3', '木头 x 1'] }
    ];

    recipes.forEach((recipe) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${recipe.name}: ${recipe.ingredients.join(', ')}`;
        craftingList.appendChild(listItem);
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'C') {
            craftingPanel.style.display = craftingPanel.style.display === 'none' ? 'block' : 'none';
        }
    });
}
    
