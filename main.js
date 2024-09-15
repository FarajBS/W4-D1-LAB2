let url = "https://coffee.alexflipnote.dev/random.json";

let container = document.getElementById("cont");
fetch(url)
.then(res => res.json())
.then((data => { 
    console.log(data);
    
        let image = document.createElement("img");
        image.src = data.file
        container.appendChild(image);

            setInterval(() => {
                image.src = "https://images.unsplash.com/photo-1725654730257-236397b73557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";
            }, 3000);
            setInterval(() => {
                image.src = "https://images.unsplash.com/photo-1723384960692-1c2565e14b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8";
            }, 6000);

            setInterval(() => {
                image.src = image.src = data.file;
            }, 9000);

            setInterval(() => {
                image.src = "https://images.unsplash.com/photo-1725961476284-fa0f6dd682a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8";
            }, 12000);

            setInterval(() => {
                image.src = image.src = data.file;
            }, 15000);
}));



