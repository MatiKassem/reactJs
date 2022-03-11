
export let producto = [{id:"jp1", name:"Monitor 24 pulgadas HP", description:"Un monitor re polenta", stock:5, precio: 22000},
{id:"jp2", name:"Monitor 27 pulgadas HP", description:"Un monitor recontra polenta", stock:4, precio: 32000},
{id:"ms2", name:"Mouse Gammer Red Dragon", description:"El mouse mas liviano del mercado", stock:3, precio: 7000},
{id:"ms3", name:"Mouse Gammer Asus", description:"Un mouse pro", stock:7, precio: 4000 },
{id:"ms5", name:"Parlantes Monitores Logitec", description:"Sonido embolvente", stock:1 , precio: 4000},
                                                                               ]

export const getFetch = new Promise((resolve , reject)=>{
let url = "producto";
if(url === "producto"){
setTimeout(() => {
resolve(producto)    
},2000);
}else{
reject("Not found") 
}
})