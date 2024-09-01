const form = document.getElementById(`formPhoneBook`);
let contacts = [];
let telephones = [];

// adicionarei meus contatos em tableRow 
let tableRows = ``;
let quantities = 0;

form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    addContact();
    updateInnerHtmlTable();
})

function updateInnerHtmlFooter() {
    const quantity = document.getElementById(`quantityOfContacts`)
    quantities += 1
    quantity.innerHTML = quantities
}

// function para array de telefones checar telefone valido 

function addContact() {
    const inputName = document.getElementById(`inputName`);
    const inputTel = document.getElementById(`inputTel`);

    inputTel.value 

    if (telephones.includes(inputTel.value)) {
        alert(`The contact ${inputName.value} already exists.`)
    } else {
        contacts.push(inputName.value)
        telephones.push(inputTel.value)

        let tableRow = `<tr>`;
        tableRow += `<td>${inputName.value}</td>`;
        tableRow += `<td>${inputTel.value}</td>`;
        tableRow += `</tr > `;
        tableRows += tableRow
        updateInnerHtmlFooter();
    }

    inputName.value = "";
    inputTel.value = "";
}

function updateInnerHtmlTable() {
    const tableBody = document.querySelector(`tbody`)
    tableBody.innerHTML = tableRows
}

