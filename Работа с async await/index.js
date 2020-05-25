document.querySelector("#load").addEventListener("click", load);

async function load() {
  let url = "https://jsonplaceholder.typicode.com/users";

  let response = await fetch(url);

  let data = await response.json();

  let html = data.map(
    (item) => `<li>${item.id} ${item.name} ${item.email}</li>`
  );

  document
    .querySelector("#list")
    .insertAdjacentHTML("afterbegin", html.join(" "));
}
