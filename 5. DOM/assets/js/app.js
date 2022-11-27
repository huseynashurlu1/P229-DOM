// // document.querySelector('#demo').innerHTML = '<i>WELCOME</i>'

// // getAttribute
// // setAttribute
// // attribute

// // let button = document.querySelector('#btn');

// // button.onclick = function() {
// //     let text = document.querySelector('#demo');
// //     // console.log(text.getAttribute('id'));
// //     text.setAttribute('class','p229')
// // }


// // let photos = document.querySelectorAll('.bottom img');
// // let top_img = document.querySelector('.top img');
// // console.log(photos);

// // for(let img of photos) {
// //     img.onclick = function() {
// //         let link = this.src;
// //         let active_img = document.querySelector('.active');
// //         active_img.classList.remove('active');
// //         this.classList.add('active')        
// //         top_img.setAttribute('src',link)
// //         // top_img.src = link
// //     }
// // }

// // let icon = document.querySelector('.box i');
// // let input = document.querySelector('.box input');
// // icon.onmouseover = function() {
// //     if(input.type === 'text') {
// //         input.type = 'password';
// //         icon.className = 'fa-solid fa-eye'
// //     }
// //     else{
// //         input.type = 'text'
// //         icon.className = 'fa-solid fa-eye-slash'
// //     }
// // }


// // contextmenu
// // preventDefault()
// // window.oncontextmenu = function(e) {
// //     e.preventDefault();
// // }


// let btn = document.querySelector('#form button');

// btn.onclick = function() {
//     let value = document.querySelector('#form input').value;

//     let span = document.createElement('span');
//     span.innerHTML = value;

//     let button = document.createElement('button');
//     button.innerHTML = 'Delete';
//     button.setAttribute('class','btn btn-danger');
    
//     let div = document.createElement('div');
//     div.setAttribute('class','box');

//     div.appendChild(span)
//     div.appendChild(button)

//     document.querySelector('#list').appendChild(div)
// }

// EventListener

// let btn = document.querySelector('#btn');

// btn.onclick = function() {
//     document.body.style.backgroundColor = 'red'
// }

// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor = 'orange'
// })

// Event Bubbling
// Event Capturing

// stopPropagation
// useCapture(true-false)

// let x = document.querySelector('.x')
// let y = document.querySelector('.y')
// let z = document.querySelector('.z')

// x.addEventListener('click',function(e) {
//     alert('Gray');
// }, true)

// y.addEventListener('click',function(e) {
//     alert('Yellow');
// }, true)

// z.addEventListener('click',function(e) {
//     alert('Black');
// }, true)


// scroll
// scrollTop

// 




let btn = document.querySelector('#form button');
let input = document.querySelector('#form input');
let msg = document.getElementById('msg');

let random_num = Math.floor(Math.random() * 100);
console.log(random_num);

let count = 0;

btn.addEventListener('click',function() {
    let value = input.value;

    count++;

    if(value > random_num) {
        msg.innerHTML = `${value}dan kiçik rəqəm yazın`
    }
    else if(value < random_num) {
        msg.innerHTML = `${value}dan böyük rəqəm yazın`
    }
    else{
        msg.innerHTML = `Təbriklər ${count} dəfəyə düzgün tapdınız...!`
    }
})

let start_btn = document.getElementById('start');

start_btn.onclick = function() {
    this.innerHTML = 'RESTART'
    this.style.backgroundColor = 'orange'
    document.getElementById('form').style.display = 'block'
}