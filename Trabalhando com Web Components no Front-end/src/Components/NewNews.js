class Newnews extends HTMLElement{
    constructor(){
        super();

        const shadow =this.attachShadow({ mode: "open" });
        
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    
    }

    build(){

        //div card
        const componentRoot = document.createElement("div");
        //setando atibuto e valor (class)
        componentRoot.setAttribute("class", "card");
        
        //div card left
        const CardLeft = document.createElement("div");
        CardLeft.setAttribute("class", "card_left");

        const Clspan = document.createElement("span");
        //seta conteudo na elemento criado
        Clspan.textContent = "by " + (this.getAttribute("autor") || " By Anonymous");

        const Clh1 = document.createElement("a");
        Clh1.textContent = this.getAttribute("title");
        Clh1.href = this.getAttribute("link-url");

        const Clparagrafo = document.createElement("p");
        Clparagrafo.textContent = this.getAttribute("content");


        // atribuindo hierarquia
        CardLeft.appendChild(Clspan);
        CardLeft.appendChild(Clh1);
        CardLeft.appendChild(Clparagrafo);

        //div card right
        const CardRight = document.createElement("div");
        CardRight.setAttribute("class", "card_right");
        
        const Crfoto = document.createElement("img");
        Crfoto.src = this.getAttribute("img-right") || "/assets/photo_padrao.png";
        //Crfoto.alt = this.getAttribute("Foto da Noticia");

        // atribuindo hierarquia
        CardRight.appendChild(Crfoto)



        componentRoot.appendChild(CardLeft);
        componentRoot.appendChild(CardRight);

        return componentRoot;

    }

    style(){
        const style = document.createElement("style");
        style.textContent =`
        .card{
            width: 70%;
            border:1px solid gray ;
            -webkit-box-shadow: 9px 12px 39px -4px rgba(0,0,0,0.8);
            -moz-box-shadow: 9px 12px 39px -4px rgba(0,0,0,0.8);
            box-shadow: 9px 12px 39px -4px rgba(0,0,0,0.8);
            display:flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 15px;
        }
        
        .card_left > h1 {
            margin-top: 15px;
            font-size: 25px;
        
        }
        
        .card_left > p {
            color: gray;
        }
        
        .card_left > span {
            font-weight: 400;
        }

        .card_right > img{
            width: 300px;
        }

        `;

        return style;
    }
}

customElements.define("new-news", Newnews)


