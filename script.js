function make_lebron() {
    const image = document.createElement("img");
    image.src = "lebron.jpeg";
    document.body.appendChild(image);
    console.log("i love you lebron");
    window.scrollTo(0, document.body.scrollHeight);
}

setInterval(() => {
    make_lebron();
}, 100);