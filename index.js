const rod = document.createElement('div')
const div = document.createElement('h4')
const div1 =document.createElement('div')
const ul = document.createElement('ul')
const item1 = document.createElement('a')
const item2 = document.createElement('a')
const item3 = document.createElement('a')


div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda totamnobis laboriosam repellendus"
div.style.border = "1px solid red";
div.style.width = "20%";
div.style.borderRadius = "13px";
div.style.margin = "auto";
div.style.fontSize = "17px";
div.style.padding = "9px";
div.style.fontWeight = "300";


ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.width = "22%";
ul.style.margin = "auto";


item1.textContent = 'intocode'
item1.href = 'https://intocode.ru/'

item2.textContent = 'google'
item2.href = 'https://www.google.com/'

item3.textContent = 'instagram'
item3.href = 'https://www-instagram-com'

ul.append(item1, item2, item3)
document.body.prepend(div1)
document.body.prepend(rod)
rod.append(div)
div1.append(ul)


