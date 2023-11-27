let btn1 = document.querySelector('[data-btn1]')
let btn2 = document.querySelector('[data-btn2]')
let r=document.querySelector('[data-r]')
let g=document.querySelector('[data-g]')
let b=document.querySelector('[data-b]')
let hex=document.querySelector('[data-display]')



function hexToRgb() {
    //declaring varibale to 
    //use replace to remove the #
    let hexV=hex.value
    hexV= hexV.replace('#','')
    
    
    //use substring to extract the numbers between two positions/indexes. 
    //16 is there since the hex values have a base of 16 .. to indicate its a hexidecimal
    let R=parseInt(hexV.substring(0,2),16)
    let G=parseInt(hexV.substring(2,4),16)
    let B=parseInt(hexV.substring(4,6),16)

    r.value=R
    g.value=G
    b.value=B

}



btn1.addEventListener('click', hexToRgb)

btn2.addEventListener('click',function () {
  r.value=""
  g.value=""
  b.value=""
  hex.value=""
  
    
})











