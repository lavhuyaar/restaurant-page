export function loadMenu() {

    //Creates menu div
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //Appends menu div to content
    content.append(menu);

    //Creates Menu Heading
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = `Menu`;

    //Creates beverages grid and cards
    const beverages = document.createElement('div');
    beverages.classList.add('beverages');

    //First beverage
    const beverageOne = document.createElement('div');
    beverageOne.classList.add('beverage-one');
    const beverageOneTitle = document.createElement('h4');
    beverageOneTitle.textContent = 'Cold Coffee';
    const beverageOneDescription = document.createElement('p');
    beverageOneDescription.textContent = `The ace of this Cafe. Most delicious cold coffee in the universe.`;
    const beverageOnePrice = document.createElement('p');
    beverageOnePrice.textContent = ` Price : 60 Rs/- `;
    beverageOne.append(beverageOneTitle, beverageOneDescription, beverageOnePrice);

    //Second beverage
    const beverageTwo = document.createElement('div');
    beverageTwo.classList.add('beverage-two');
    const beverageTwoTitle = document.createElement('h4');
    beverageTwoTitle.textContent = 'Cappuccino Coffee';
    const beverageTwoDescription = document.createElement('p');
    beverageTwoDescription.textContent = `The perfect balance of espresso, steamed milk and foam. Our cappuccino coffee is all about taste, culture and of course, coffee.`;
    const beverageTwoPrice = document.createElement('p');
    beverageTwoPrice.textContent = ` Price : 70 Rs/- `;
    beverageTwo.append(beverageTwoTitle, beverageTwoDescription, beverageTwoPrice);

    //Third beverage
    const beverageThree = document.createElement('div');
    beverageThree.classList.add('beverage-three');
    const beverageThreeTitle = document.createElement('h4');
    beverageThreeTitle.textContent = 'Dalgona Coffee';
    const beverageThreeDescription = document.createElement('p');
    beverageThreeDescription.textContent = `The perfect hand beaten dalgona coffee you'll ever find.`;
    const beverageThreePrice = document.createElement('p');
    beverageThreePrice.textContent = ` Price : 100 Rs/- `;
    beverageThree.append(beverageThreeTitle, beverageThreeDescription, beverageThreePrice);

    //Fourth beverage
    const beverageFour = document.createElement('div');
    beverageFour.classList.add('beverage-four');
    const beverageFourTitle = document.createElement('h4');
    beverageFourTitle.textContent = 'Lav Special Coffee';
    const beverageFourDescription = document.createElement('p');
    beverageFourDescription.textContent = `Owner's patented coffee recipe. Also recognised as the "Universe's best coffee".`;
    const beverageFourPrice = document.createElement('p');
    beverageFourPrice.textContent = ` Price : 200 Rs/- `;
    beverageFour.append(beverageFourTitle, beverageFourDescription, beverageFourPrice);

    beverages.append(beverageOne, beverageTwo, beverageThree, beverageFour);

    menu.append(menuHeading, beverages);

}