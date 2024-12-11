let app = new XMLHttpRequest();
app.open("GET", "https://jsonplaceholder.typicode.com/users");
app.send("");
app.onreadystatechange = function () {
  if (app.readyState === 4 && app.status === 200) {
    // console.log(app.response);
    let res = JSON.parse(app.response);
    console.log(res);
    // for (let i = 0; i < res.length; i++) {
    //   document.getElementById("List").innerHTML +=
    //     res[i].name + " " + res[i].email + "<br>";
    const table = document.createElement("table");

    const headerRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    const emailHeader = document.createElement("th");
    nameHeader.textContent = "Name";
    emailHeader.textContent = "Email";
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(emailHeader);
    table.appendChild(headerRow);

    for (let i = 0; i < res.length; i++) {
      const row = document.createElement("tr");

      const nameSec = document.createElement("td");
      nameSec.textContent = res[i].name;

      const emailSec = document.createElement("td");
      emailSec.textContent = res[i].email;

      row.appendChild(nameSec);
      row.appendChild(emailSec);
      table.appendChild(row);
    }

    document.getElementById("List").appendChild(table);
  }
};
function getData() {
  let inp = document.getElementById("data").value;
  let app = new XMLHttpRequest();
  app.open("GET", "https://jsonplaceholder.typicode.com/users/" + inp);
  app.send("");
  app.onreadystatechange = function () {
    if (app.readyState === 4 && app.status === 200) {
      let res = JSON.parse(app.response);
      console.log(res);

      document.getElementById("List2").innerHTML +=
        "Selected user name is :" + res.name + "<br>";

      document.getElementById("List2").innerHTML +=
        "Selected Email is : " + res.email + "<br>" + "<br>";
    }
  };
}

// let List1 = document.getElementById("List");
// let listItem = document.createElement("li");
// listItem.innerText = res;
