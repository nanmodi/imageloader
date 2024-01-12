
let page=1;
let image="";
let formblock=document.getElementById("search");
let divimage=document.getElementById("box");
let addmore=document.getElementsByClassName("addmore");
let textcontain=document.getElementById("search-box");
let key="XmsOe93F_0MJH2cr5Gdiv2spLyltDL8R-dFNAsBA9Vs"


async function respon()
{
  image=textcontain.value;
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${image}&client_id=${key}`;
 let img1=await fetch(url);
 let img=await img1.json();
 console.log(img);
 let result=img.results;
 result.map((elem)=>{
  let im=document.createElement("img");
 im.src=elem.urls.small;
 divimage.appendChild(im);
 })
 addmore[0].style.display="block";
 
}
addmore[0].addEventListener("click",(e)=>{
  
  page++;
  respon();
})
formblock.addEventListener("submit",(e)=>{
  e.preventDefault();
  page=1;
respon();

})
