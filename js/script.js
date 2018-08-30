let dataList = document.createElement("ol");
let listElement, allData;
dataList.setAttribute("id", "my-list");

function getData() {
    fetch('http://www.mrsoft.by/data.json')
        .then(response => {
                response.json().then(data => {
                    let elementList;
                    allData = data;

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
    if (document.getElementById("txt").value !== '') {
        let emptyList = document.getElementById("my-list");
        emptyList.innerHTML = '';
        let elementList;

        for (let i = 0; i < allData.data.length; i++) {
            if (document.getElementById("txt").value < allData.data[i].length) {
                elementList = document.createElement("li");
                listElement = document.createTextNode(allData.data[i]);
                elementList.appendChild(listElement);
                document.getElementById("my-list").appendChild(elementList);
            }
        }

        document.body.appendChild(dataList);
    }
}

function substringFilter() {
    if (document.getElementById("txt").value !== '') {
        let emptyList = document.getElementById("my-list");
        let strValue = '' + document.getElementById("txt").value;
        emptyList.innerHTML = '';
        let elementList;

        for (let i = 0; i < allData.data.length; i++) {
            if (document.getElementById("checkForRegister").checked === true) {
                if (allData.data[i].indexOf(strValue) !== -1) {
                    elementList = document.createElement("li");
                    listElement = document.createTextNode(allData.data[i]);
                    elementList.appendChild(listElement);
                    document.getElementById("my-list").appendChild(elementList);
                }
            } else {
                if (allData.data[i].toUpperCase().indexOf(strValue.toUpperCase()) !== -1) {
                    elementList = document.createElement("li");
                    listElement = document.createTextNode(allData.data[i]);
                    elementList.appendChild(listElement);
                    document.getElementById("my-list").appendChild(elementList);
                }
            }
        }

        document.body.appendChild(dataList);
    }
}

let el1 = document.getElementById("filter-by-length-of-words");
el1.addEventListener("click", filterByLengthOfWords, false);
let el2 = document.getElementById("substring-filter");
el2.addEventListener("click", substringFilter, false);

getData();