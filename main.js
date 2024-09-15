let url = "https://coffee.alexflipnote.dev/random.json";

let container = document.getElementById("cont");
fetch(url)
.then(res => res.json())
.then((data => { 
    console.log(data);
    
    let image = document.createElement("img");
    image.src = data.file;
    container.appendChild(image);

    setInterval(() => {
        image.src = data.file;
    }, 2000);
}));



