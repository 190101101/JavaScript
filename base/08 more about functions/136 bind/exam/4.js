const menu = {
	mainMenu: [],
	addMeals(...meals) {
		this.mainMenu.push(...meals);
	}
};

const newMenu = menu.addMeals.bind(menu);
newMenu('meat', 'rise', 'egg');
newMenu('luggage', 'chicken');
console.log(menu.mainMenu);