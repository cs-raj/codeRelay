class CardComponent{
    constructor(individualData){
        this.individualData = individualData;
        this.isMounted = false;
    }
    render(){
        //Creating the component
        const {name, profileImage, introduction, profileLink} = this.individualData;

        const card = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardImageDiv = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardTitle = document.createElement('h3');
        const cardContentDiv = document.createElement('div');
        const cardContent = document.createElement('p');
        const cardLink = document.createElement('a');

        //Assiging the classes and ID's
        card.classList.add("card");
        cardHeader.classList.add("card-header");
        cardImageDiv.classList.add("card-img");
        cardContentDiv.classList.add("card-content");
        cardLink.classList.add("card-link");

        //adding innerText
        // introduction
        //name
        //profileImage
        //profileLink
        
        cardTitle.innerText = name;
        cardContent.innerText = introduction;
        cardLink.href = profileLink;
        cardLink.innerText = "Know more";
        cardLink.target = "_blank";
        cardImage.src = "https://vikasrangaswamy.github.io/Contentstack/"+profileImage; ;
        cardImage.alt = name;


        // appendchild 

        card.appendChild(cardHeader);
        card.appendChild(cardImageDiv);
        cardImageDiv.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardContentDiv);
        cardContentDiv.appendChild(cardContent);
        card.appendChild(cardLink);
        
        return card;

    }
    mount(el){
        if (this.isMounted) return
        if(el){
            el.appendChild(this.render());
            this.isMounted = true;
            return;
        }
        document.body.appendChild(this.render());
        this.isMounted = true;
        return;
    }
}

export { CardComponent };