let tableInformation = {
    thead: [
        'Remove',
        'Employee Name',
        'Designation',
        'Age'
    ]
};

function createTable() {
    let btn = document.querySelector('button');

    if (btn.innerHTML == 'Create Table') {
        let table = document.createElement('table');
        document.getElementById('table-area').appendChild(table);

        let thead = document.createElement('thead');
        table.appendChild(thead);

        let tbody = document.createElement('tbody');
        table.appendChild(tbody);

        let tr = document.createElement('tr');
        thead.appendChild(tr);

        for (i = 0; i < tableInformation.thead.length; i++) {
            let th = document.createElement('th');
            th.innerHTML = tableInformation.thead[i];
            tr.appendChild(th);
        }

        btn.innerHTML = 'Add Row';
    } else {
        let tr = document.createElement('tr');
        document.querySelector('tbody').appendChild(tr);

        for (i = 0; i < tableInformation.thead.length; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);

            let input = document.createElement('input')
            td.appendChild(input);

            if (i == 0) {
                input.setAttribute('type', 'button');
                input.setAttribute('value', 'Remove');
                input.setAttribute('onclick', 'removeRow(this)');
            }

            if (i == 3) {
                input.setAttribute('type', 'number');
                input.setAttribute('value', 'Remove');
            }
        }
    }
}

function removeRow(e) {
    e.parentElement.parentElement.remove();
}

function delAll() {
    document.querySelector('table').remove();
    document.querySelector('button').innerHTML = 'Create Table';
}