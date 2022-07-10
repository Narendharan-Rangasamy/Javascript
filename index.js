console.log("TEST")

var body = document.querySelector('body')
var heading = document.createElement('h1')
heading.innerHTML = "Hi Everyone.."

var image = document.createElement('img')
image.src = "https://images.unsplash.com/photo-1656870679469-156e3c955489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
image.style = `
    width: 100%
`

var content =document.createElement('p')
content.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium adipisci totam. Pariatur sunt earum beatae, autem ratione rerum aut ullam mollitia sapiente laboriosam error sint, harum repellat repudiandae? orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium orem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat laudantium "

var button = document.createElement('button')
button.innerHTML = "Explore More"
button.style = `
    margin-top: 10px;
    padding: 10px 30px;
    background-color: green;
    width: 100%
`
var container = document.createElement('div')
body.appendChild(container)
container.style = `
    background-color: lightgrey;
    padding: 10px;
    border: 1px solid #2e699c;
    width: 500px;
    height: auto;
`
container.append(heading, image, content, button)