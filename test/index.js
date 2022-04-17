const userList = [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg" },
{ "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg" },
{ "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg" },
{ "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg" },
{ "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg" },
{ "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg" }
]

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);


let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "id";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "email";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "first_name";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "last_name";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "image";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);


for(let i=0; i<userList.length; i++){
    let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML =userList[i].id;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = userList[i].email;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = userList[i].first_name;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = userList[i].last_name;
let row_2_data_5 = document.createElement('td');


let img = document.createElement("img");
    img.src = userList[i].avatar;
    row_2_data_5.appendChild(img);



row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);
}