//link :=https://api.unsplash.com//search/photos/?query=${take}&per_page=50&client_id=TPn7Mw0tZZ5F2iuYHS7P8crw86SMPuaEKQ5dCnI_uM4`

import { navbar } from "../components/navbar.js";
let put=document.querySelector("#navbar");
put.innerHTML=navbar();

import { searchbar,appendinghere} from "./fetch.js";
let pop=document.querySelector("#container");
let searching=(val)=>{
    if(val.key==="Enter"){
      let dom=document.querySelector("#query").value;
        let roam=searchbar(dom);
        roam.then((res)=>{
            appendinghere(res,pop);
        }).catch((bon)=>{
            console.log(bon)
        })
    }
}

document.querySelector("#query").addEventListener("keydown",searching);



let cata=document.querySelector("#catagory").children;
function bomsearh(){
    let roam=searchbar(this.id);
        roam.then((res)=>{
            appendinghere(res,pop);
        }).catch((bon)=>{
            console.log(bon)
        })
}
for(let el of cata){
    el.addEventListener('click',bomsearh);
}
