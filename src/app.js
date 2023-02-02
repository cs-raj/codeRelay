
import { CardsContainer } from "./component/CardsContainer.js";


const  root =document.getElementById("root");
const url="https://vikasrangaswamy.github.io/Contentstack/data/Card.json";

fetch(url)
.then((respose)=>{
    return respose.json();

})
.then((value)=>{
   // console.log("data is fetched",value);

    const cardcontainer1 = new CardsContainer(value) ;

   
    cardcontainer1.mount(root);
})
.catch((error)=>{
    console.log("Error occured",error);

})


 