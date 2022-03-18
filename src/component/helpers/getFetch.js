
export let producto = [{id:"jp1", name:"Monitor 24 pulgadas HP", categoria:"monitores", description:"Un monitor re polenta", stock:5, precio: 22000, imagen:"https://support.hp.com/doc-images/932/c05272402.jpg"},
{id:"jp2", name:"Monitor 27 pulgadas HP", description:"Un monitor recontra polenta", categoria: "monitores", stock:4, precio: 32000, imagen:"https://support.hp.com/doc-images/36/c05078604.jpg"},
{id:"ms2", name:"Mouse Gammer Red Dragon", description:"El mouse mas liviano del mercado", categoria: "perifericos", stock:3, precio: 7000, imagen:"https://www.megatecnologia.com.ar/images/1635262483844.jpg"},
{id:"ms3", name:"Mouse Gammer Asus", description:"Un mouse pro", categoria: "perifericos", stock:7, precio: 4000, imagen:"https://m.media-amazon.com/images/I/51g13u-id8L._AC_SY450_.jpg" },
{id:"ms5", name:"Parlantes Monitores Logitec", description:"Sonido embolvente", categoria: "audio", stock:1 , precio: 4000, imagen:"https://m.media-amazon.com/images/I/51fBODtSLnL._AC_SY450_.jpg"},
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