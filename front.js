var text_content1 = ''
var text_content2 = ''
var text_content3 = ''
var text_content4 = ''


var ar1 = ['text11111111','text222222222','text333333333333333']


var elem1 = document.getElementById('textchange1')
elem1.addEventListener('mouseover',function(){
    text_content1 = elem1.textContent
    
    elem1.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum doloremque ducimus necessitatibus ab dolorem aspernatur provident expedita incidunt recusandae, ex velit ipsum vero. Similique?"
})



var elem2 = document.getElementById('textchange2')
elem2.addEventListener('mouseover',function(){
    text_content2 = elem2.textContent
    elem2.textContent="this is  a hover222222 test amet consectetur adipisicing elit. Nobis dolorum doloremque ducimus necessitatibus ab dolorem aspernatur provident expedita incidunt recusandae, ex velit ipsum vero. Similique?"
})



var elem3 = document.getElementById('textchange3')
elem3.addEventListener('mouseover',function(){
    
    text_content3 = elem3.textContent
    elem3.textContent="this is  a hover33333 test amet consectetur adipisicing elit. Nobis dolorum doloremque ducimus necessitatibus ab dolorem aspernatur provident expedita incidunt recusandae, ex velit ipsum vero. Similique?"
})


var elem4 = document.getElementById('textchange4')
elem4.addEventListener('mouseover',function(){
    text_content4 = elem4.textContent 
    elem4.textContent="this is  a hover4444444 test amet consectetur adipisicing elit. Nobis dolorum doloremque ducimus necessitatibus ab dolorem aspernatur provident expedita incidunt recusandae, ex velit ipsum vero. Similique?"
})


elem1.addEventListener('mouseleave',function(){
    elem1.textContent = text_content1
})

elem2.addEventListener('mouseleave',function(){
    elem2.textContent = text_content2
})

elem3.addEventListener('mouseleave',function(){
    elem3.textContent = text_content3
})

elem4.addEventListener('mouseleave',function(){
    elem4.textContent = text_content4
})

var textmove = document.getElementById('movetext')
var defaulttext = textmove.textContent


var stock1 = document.getElementById('stock')
var stockcount = 70000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
for (let a = 0; a <= stockcount; a++) {
    setTimeout(() => stock1.textContent = a, 1)
}