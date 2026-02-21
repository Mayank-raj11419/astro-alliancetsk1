const grid = document.querySelector(".img-grid");

fetch("https://api.nasa.gov/planetary/apod?api_key=flLhouQd5OmYbqN9k3EjZ5v6OdEo26cBsA4ImnL5&count=10")
.then(response => response.json())
.then(data => {

    data.forEach(item => {

        const li = document.createElement("li");

        const img = document.createElement("img");
        const title = document.createElement("span");
        const date = document.createElement("span");
        img.src = item.url;      
        title.innerText = item.title;
        date.innerText = item.date;

         


        li.appendChild(img);
        li.appendChild(title);
        li.appendChild(date);
        grid.appendChild(li);
    });

});
