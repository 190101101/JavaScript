const addMeal = function(menu){
	this.mainMenu.push(menu);
}

const menu = {
	mainMenu: [],
	addMeals: function(...menu){
		this.mainMenu.push(...menu);
	}
};

const newMenu = menu.addMeals.bind(menu);
newMenu('meat', 'chicken');

console.log(menu.mainMenu);
