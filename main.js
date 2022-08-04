let container=document.querySelector(".container")
let par1=document.querySelector(".par1")
let par2=document.querySelector(".par2")
let photo=document.querySelector(".photo")

let arr=[
    {Story:"Marilyn Monroe (1926-1962) Model, actress, singer and arguably one of the most famous women of the twentieth century. Monroe has become an iconic representative of fame and female beauty.",  
    Img:"1.jpeg" ,
    Name:"Marlyn Monroe"},
    {Story: "Abraham Lincoln was born Feb 12, 1809, in a single-room log cabin, Hardin County, Kentucky. His family upbringing was modest; his parents from Virginia were neither wealthy or well known. ", 
    Img:"2.jpeg", 
    Name:"Abraham Lincoln"
    },
    {Story:"Nelson Mandela (1918 – 2013) was a South African political activist who spent over 20 years in prison for his opposition to the apartheid regime; he was released in 1990.",
    Img:"3.webp", 
    Name:"Nelson Mandela"
    }
]

par1.innerHTML=arr[0].Story
photo.style.backgroundImage=`url(${arr[0].Img})`
par2.innerHTML=arr[0].Name

let line = document.querySelector(".line")
let lineIsLittle = true
let counter = 0
setTimeout(() => line.classList.add('active'))
let time = setInterval(() => {
    counter++
    if (counter === arr.length) {
        counter = 0
    }
    par1.innerHTML = arr[counter].Story
    photo.style.backgroundImage = `url(${arr[counter].Img})`
    par2.innerHTML = arr[counter].Name
    line.classList.remove('active')
    setTimeout(() => line.classList.add('active'), 2)
}, 5000)
