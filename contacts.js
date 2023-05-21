const svgPlus = document.querySelector('.svg-plus');
const topSideWrapper = document.querySelector('.top-side-wrapper');
const topSideCreate = document.querySelector('.top-side-create');
const svgExit = document.querySelector('.svg-exit');
const inputWrapper = document.querySelector('.input-wrapper');
const contactList = document.querySelector('.contact-list');
const addButton = inputWrapper.querySelector('h3');

function renderingListOfContacts() {
    contactList.innerHTML = '';
    const listOfContactsData = JSON.parse(localStorage.getItem("contactData"));
    if(listOfContactsData) {
        const rendered = listOfContactsData.map((contact) => {
        const div = document.createElement("div");
        const listItemWrapper = document.createElement('div');
        const h3 = document.createElement("h3");
        const h3second = document.createElement("h3");
        const span2 = document.createElement("p");
        const name = document.createTextNode(`${contact.name}`);
        const surname = document.createTextNode(`${contact.surname}`);
        const phoneNumber = document.createTextNode(`${contact.phone}`);

        h3.appendChild(name);
        h3second.appendChild(surname);
        span2.appendChild(phoneNumber);
        listItemWrapper.appendChild(h3);
        listItemWrapper.appendChild(h3second);
        div.appendChild(listItemWrapper);
        div.appendChild(span2);
        div.classList.add('list-item');
        listItemWrapper.classList.add('list-item-wrapper');
        contactList.appendChild(div);
    })
}
}
renderingListOfContacts();

svgPlus.addEventListener('click', () => {
    topSideWrapper.classList.add('disabled');
    topSideCreate.classList.remove('disabled');
    inputWrapper.classList.remove('disabled');
    contactList.classList.add('disabled');
})

addButton.addEventListener('click', () => {
    const nameInput = inputWrapper.querySelector('#name').value;
    const surnameInput = inputWrapper.querySelector('#surname').value;
    const phoneInput = inputWrapper.querySelector('#phone').value;

    topSideWrapper.classList.remove('disabled');
    topSideCreate.classList.add('disabled');
    inputWrapper.classList.add('disabled');
    contactList.classList.remove('disabled');

    const dataContener = [];

    let localStorageData = JSON.parse(localStorage.getItem("contactData"));
    console.log(localStorageData);
    if(phoneInput && nameInput && surnameInput && localStorageData != null) {
        dataContener.unshift({name: nameInput , surname: surnameInput, phone: phoneInput }, ...localStorageData)
    }
    else if(phoneInput && nameInput && surnameInput && localStorageData == null) {
        dataContener.unshift({name: nameInput , surname: surnameInput, phone: phoneInput })
    } else {
        console.log('error');
    }
    localStorage.setItem("contactData", JSON.stringify(dataContener));
    renderingListOfContacts()
})

svgExit.addEventListener('click', () => {
    let nameInput = inputWrapper.querySelector('#name');
    let surnameInput = inputWrapper.querySelector('#surname');
    let phoneInput = inputWrapper.querySelector('#phone');

    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
    topSideWrapper.classList.remove('disabled');
    topSideCreate.classList.add('disabled');
    inputWrapper.classList.add('disabled');
    contactList.classList.remove('disabled');
})