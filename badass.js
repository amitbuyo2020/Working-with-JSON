const header = document.querySelector('header');
const blockquote = document.querySelector('quote');
const section = document.querySelector('section');

let requestURL = 'myheroes.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);

// Specifying the response type
request.responseType = 'json';
request.send();

// Getting Response from the server
request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeader(superHeroes);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = "World: " + jsonObj['world'];
    header.appendChild(myPara);
}

function showHeader(jsonObj) {
    const heroes = jsonObj['members'];

    for (let i=0; i< heroes.length; i++ ) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        const myList = document.createElement('ul');
        const myBlock = document.createElement('quote');


        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Position: ' + heroes[i].position;
        myPara2.textContent = 'Nickname: ' + heroes[i].nickName;
        myPara3.textContent = 'Age: ' + heroes[i].age;
        myPara4.textContent = 'Address: ' + heroes[i].address;
        myBlock.textContent = heroes[i].quote;

        myPara5.textContent = 'Speciality:'

        const specialPower = heroes[i].speciality
        for (let j=0; j< specialPower.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = specialPower[j];
            myList.appendChild(listItem);
        }
        
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList);
        blockquote.appendChild(myBlock);
        
        section.appendChild(myArticle);
    }
}
