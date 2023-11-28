const num1Input= document.querySelector('#num1')
const num2Input=document.querySelector('#num2')
const res=document.querySelector('#resultado');
const somabtn=document.querySelector('.soma')
const btnapagar=document.querySelector('.btnapagar')
const multiplicação=document.querySelector('.multiplicacao')
const subtração=document.querySelector('.subtração')
const divisao=document.querySelector('.divisão')

const secaoImgFizz=document.querySelector('.container-img-fizz');
const secaoImgbuzz=document.querySelector('.container-img-buzz');

const imgFizz=document.querySelector('.img-fizz')
const imgbuzz=document.querySelector('.img-buzz')

somabtn.addEventListener('click',(e)=>{

soma(num1,num2);

if(res.innerHTML%3===0 && res.innerHTML%5===0){
aparecebuzz()
  aparecefizz()
  return

}

else if(res.innerHTML%3===0){
  imgbuzz.style.display='none' 
aparecefizz();

return
}

else if (res.innerHTML%5===0){
  imgFizz.style.display='none'
aparecebuzz();

}


})

subtração.addEventListener('click',(e)=>{

subtrair(num1,num2)

if(res.innerHTML%3===0 && res.innerHTML%5===0){
  aparecebuzz()
    aparecefizz()
    return
  
  }
else if(res.innerHTML%3===0){
  imgbuzz.style.display='none' 
aparecefizz();

return
}

else if (res.innerHTML%5===0){
  imgFizz.style.display='none'
aparecebuzz();

}

})

multiplicação.addEventListener('click',(e)=>{

multiplicar(num1,num2);

if(res.innerHTML%3===0 && res.innerHTML%5===0){
  aparecebuzz()
    aparecefizz()
    return
  
  }
else if(res.innerHTML%3===0){
  imgbuzz.style.display='none' 
aparecefizz();

return
}

else if (res.innerHTML%5===0){
  imgFizz.style.display='none'
aparecebuzz();

}

})

divisao.addEventListener('click',(e)=>{

dividir(num1,num2);

if(res.innerHTML%3===0 && res.innerHTML%5===0){
  aparecebuzz()
    aparecefizz()
    return
  
  }
else if(res.innerHTML%3===0){
  imgbuzz.style.display='none' 
aparecefizz();

return
}

else if (res.innerHTML%5===0){
  imgFizz.style.display='none'
aparecebuzz();

}

})

btnapagar.addEventListener('click',(e)=>{

res.innerHTML=''
num1.value=''
num2.value=''

apagasecaofizz();
apagasecaobuzz();
})

function soma(num1 , num2){

 if(num1.value==='' || num2.value===''){

     return res.innerHTML=''
     
    }
return res.innerHTML=Number(num1.value) + Number(num2.value)

}

function multiplicar(num1,num2){

 if(num1.value==='' || num2.value===''){

   return res.innerHTML=''

 }   

return res.innerHTML=Number(num1.value)*Number(num2.value)

}

function subtrair(num1,num2){

    if(num1.value==='' || num2.value===''){

        return res.innerHTML=''
     
      }   


     return res.innerHTML= Number(num1.value) - Number(num2.value)   




}

function dividir(num1,num2){

    if(num1.value==='' || num2.value===''){

        return res.innerHTML=''
     
      }   


     return res.innerHTML= Number(num1.value) / Number(num2.value)   




}

function apagasecaofizz(){


return imgFizz.style.display='none'


}
function apagasecaobuzz(){

return imgbuzz.style.display='none'

}

function aparecefizz(){

return imgFizz.style.display='flex'

}

function aparecebuzz(){

return imgbuzz.style.display='flex'

}
