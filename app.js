const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "./img/logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

const url = "https://ghibliapi.herokuapp.com/films";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const h2 = document.createElement("h2");
      h2.textContent = `Release date: ${movie.release_date}`;

      const h3 = document.createElement("h3");
      h3.textContent = `Producer: ${movie.producer}`;

      const p = document.createElement("p");
      movie.description = movie.description;
      p.textContent = `${movie.description}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(p);
    });
  })
  .catch((err) => {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Yikes! It is not working! check API connection`;
    app.appendChild(errorMessage);
  });
