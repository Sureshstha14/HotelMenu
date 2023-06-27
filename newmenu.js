 let data = [
    {
        id : 1,
        category :'breakfast',
        name: 'Pancake',
        price: 15,
        image: 'images\pancake.jpg',
        desc : 'We are seving Pancake for last 5 years. This is japanese pancake.',
    },
    {
        id : 2,
        category :'breakfast',
        name: 'Momo',
        price: 5,
        image: "computer.jpg",
        desc : 'We are seving Momo for last 5 years. This is japanese momo.',
    },
    {
        id : 3,
        category :'dinner',
        name: 'Chowein',
        price: 4,
        image: "images\burger and fries.jpg",
        desc : 'We are seving Chowein for last 5 years. This is japanese Chowein.',
    },
    {
        id : 4,
        category :'lunch',
        name: 'Pizza',
        price: 8,
        image: 'buddha1.jpg.png',
        desc : 'We are seving Pizza for last 5 years. This is japanese Pizza.',
    }

 ]
 var btn = document.querySelectorAll(".btn");

 var container= document.querySelector('.container')
 console.log('How r u?');
 console.log('haha');
btn.forEach(function(btn){
   btn.addEventListener('click',function(elem){
     var type1 = elem.currentTarget.dataset.id ;
     console.log(type1);
        var filter1 = data.filter(function(e){
         if(e.category ==  type1){
            return e;
         }
        })
        if(type1 == 'all'){
         display_data(data);
        }
        else {
         display_data(filter1);
        }
})
})
 window.addEventListener('DOMContentLoaded',function(){
    display_data(data);

 })

function display_data(data){
    var displaydata = data.map(function(elem){
        return `  <div class="box1">
        <img src=${elem.image} alt="" class="image">
        <div class="content">
            <div class="item_price">
                <h1>${elem.name}</h1>
                <a href="">$ ${elem.price}</a>
            </div>
            <p> ${elem.desc}
            </p>
        </div>
        </div>`
     })
     displaydata = displaydata.join("");
     container.innerHTML = displaydata;    
 
}