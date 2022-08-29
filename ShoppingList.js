const myList = [];
for(let i = 0;i<=5;i++) {
  myList.push([
    Math.ceil(Math.random()*1000).toString(28),
    Math.ceil(Math.random()*1000)
  ])
}

console.log(myList)