let totalCount = document.querySelector(".wrapper-row").children.length
let itemWidth = (100/totalCount ) - .5
console.log(itemWidth)
for(let i = 0; i < document.querySelector(".wrapper-row").children.length; i++){
console.log(document.querySelector(".wrapper-row").children[i])
document.querySelector(".wrapper-row").children[i].style.width = itemWidth+'%'
}
