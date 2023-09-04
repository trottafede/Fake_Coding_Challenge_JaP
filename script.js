document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", handleSubmit);
});

const handleSubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const DOB = document.getElementById("DOB").value;
  const spinner = document.getElementById("spinner");
  const myBtn = document.getElementById("myBtn");
  myBtn.disabled = true;

  spinner.style.setProperty("display", "block");

  const url = "https://jsonplaceholder.typicode.com/users";

  const user = {
    name,
    lastname,
    DOB,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      document.getElementById("response_id").innerHTML = "ID: " + json.id;
      document.getElementById("response_name").innerHTML = "Name: " + json.name;
      document.getElementById("response_lastname").innerHTML =
        "Lastname: " + json.lastname;
      document.getElementById("response_DOB").innerHTML = "DOB: " + json.DOB;

      spinner.style.setProperty('display', 'none');
    });
};
