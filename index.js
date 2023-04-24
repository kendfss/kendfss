const quoteURL = "https://linusquote.com/quote"
const quoteBox = document.querySelector("#linusQuote")
// const quote = httpGet(quoteURL)
const quote = `"Standards are paper. I use paper to wipe my butt every day. That's how much that paper is worth."\n-                              Linus Torvalds`
// var quote = await fetch(quoteURL).json().body

// fetch(quoteURL)
//     .then((res) => res.json())
//     .then((res) => {
//         respo = res;
//         quoteBox.innerText = `${res.body}\n-                              Linus Torvalds`.replace("\\\"", "\"")
// console.log(quoteBox.innerHTML)
//     });

f = () => {
    quoteBox.innerText = quote;
};
f()
// function httpGet(theUrl) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", theUrl, false); // false for synchronous request
//     xmlHttp.send(null);
//     return xmlHttp.responseText;
// }
