document.querySelector("#load").addEventListener("click", load);

function load() {
  let url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((respons) => respons.json())
    .then((data) => {
      let ul = document.querySelector("#list");

      let html = data.map(
        (item) => `<li>${item.id} ${item.name} ( ${item.email} )</li>`
      );
      ul.insertAdjacentHTML("afterbegin", html.join(" "));
    });
}
