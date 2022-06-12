let searchbar=async(take)=>{
    try {
        let make=await fetch(`https://api.unsplash.com//search/photos/?query=${take}&per_page=50&client_id=TPn7Mw0tZZ5F2iuYHS7P8crw86SMPuaEKQ5dCnI_uM4`);
        let bake=await make.json();
        console.log(bake);
        return bake.results;
    } catch (error) {
        console.log(error)
    }
}

let appendinghere=(data,location)=>{
    location.innerText=null;
    data.forEach(({alt_description,urls:{small}}) => {
        let divone=document.createElement("div");

        let one=document.createElement("img");
        one.setAttribute("src",small);

        let two=document.createElement("h3");
        two.innerText=alt_description;

        divone.append(one,two);

        location.append(divone);
    });
}

export {searchbar,appendinghere};
