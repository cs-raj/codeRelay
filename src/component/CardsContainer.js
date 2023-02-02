class CardsContainer{
    constructor(teamData){
        this.teamData=teamData;
    }
    render(){

        const cards=document.createElement("div")
        const cardsContainer=document.createElement("div");
        const teamHeading=document.createElement("div");
        const h1Text=document.createElement("h1");
        const h2Text=document.createElement("h2");
        
        cards.classList.add("cards")
        cardsContainer.classList.add("team");
        cardsContainer.id="team_start";
        teamHeading.classList.add("team-heading");

        h1Text.innerText="WELCOME";
        h2Text.innerText="Interns 2023";

        cardsContainer.appendChild(teamHeading);
        teamHeading.appendChild(h1Text);
        teamHeading.appendChild(h2Text);
        cardsContainer.appendChild(cards);

        return cardsContainer;
    }
}