let detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e){
    e.preventDefault();
    let destName = e.target.elements['name'].value;
    let desLocation = e.target.elements['location'].value;
    let destPhoto = e.target.elements['photo'].value;
    let destDesc = e.target.elements['description'].value;
    for(var i = 0; i < detailsForm.lenght; i++){
        detailsForm.element[i].value = '';
    }

    let destCard = createDestinationCard(destName, desLocation, destPhoto, destDesc);

    let wishLostContainer = document.querySelector('#destinations_container');
    if(wishLostContainer.children.length === 0){
        document.getElementById('#title').innerHTML = 'My Wish list'
    }

    document.querySelector('#destinations_container').appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, description){
    
    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.setAttribute('alt', name);

    let constantPhotoURL = 'images/signpost.jpg';

    if(photoURL.lenght === 0){
        img.setAttribute('src', constantPhotoURL);
    }else{
        img.setAttribute('src', photoURL);
    }

    let cardBody = document.createElement('h3');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h3');
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    let cardSubtitle = document.createElement('h4');
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if(description.lenght !== 0){
        let cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    let cardDeleteBtn = document.createElement('button');
    cardDeleteBtn.innerText = 'Remove';

    cardDeleteBtn.addEventListener('click', removeDescription);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);

    return card;
}

function removeDescription(e){
    let card = e.target.parentElement.parentElement;
    card.remove();
}