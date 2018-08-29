let dataList = document.createElement("ol");
let listElement;
dataList.setAttribute("id", "my-list");

function getData() {
    fetch('http://www.mrsoft.by/data.json')
        .then(response => {
                response.json().then(data => {
                    let elementList;

                    for(let i = 0; i < data.data.length; i++) {
                        elementList = document.createElement("li");
                        listElement = document.createTextNode(data.data[i]);
                        elementList.appendChild(listElement);
                        document.getElementById("my-list").appendChild(elementList);
                    }
                });
        });

    document.body.appendChild(dataList);
}

function filterByLengthOfWords() {
    if(document.getElementById("txt").value !== '') {
        let emptyList = document.getElementById("my-list");
        emptyList.innerHTML = '';
        let elementList;

        fetch('http://www.mrsoft.by/data.json')
            .then(response => {
                response.json().then(data => {
                    let elementList;

                    for(let i = 0; i < data.data.length; i++) {
                        if(document.getElementById("txt").value < data.data[i].length) {
                            elementList = document.createElement("li");
                            listElement = document.createTextNode(data.data[i]);
                            elementList.appendChild(listElement);
                            document.getElementById("my-list").appendChild(elementList);
                        }
                    }
                });
            });



        document.body.appendChild(dataList);
    }
}

function substringFilter() {
    if(document.getElementById("txt").value !== '') {
        let emptyList = document.getElementById("my-list");
        let strValue = '' + document.getElementById("txt").value;
        emptyList.innerHTML = '';

        fetch('http://www.mrsoft.by/data.json')
            .then(response => {
                response.json().then(data => {
                    let elementList;

                    for(let i = 0; i < data.data.length; i++) {
                        if(document.getElementById("checkForRegister").checked === true) {
                            if (data.data[i].indexOf(strValue) !== -1) {
                                elementList = document.createElement("li");
                                listElement = document.createTextNode(data.data[i]);
                                elementList.appendChild(listElement);
                                document.getElementById("my-list").appendChild(elementList);
                            }
                        } else {
                            if (data.data[i].toUpperCase().indexOf(strValue.toUpperCase()) !== -1) {
                                elementList = document.createElement("li");
                                listElement = document.createTextNode(data.data[i]);
                                elementList.appendChild(listElement);
                                document.getElementById("my-list").appendChild(elementList);
                            }
                        }
                    }
                });
            });

        document.body.appendChild(dataList);
    }
}

getData();