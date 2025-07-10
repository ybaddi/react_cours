import { Produit } from "../produit/Produit"

export function Primeur(){
    let produits = [
{ nom: "banane", price: 3, quentity: 10 },
{ nom: "fraise", price: 10, quentity: 20 },
{ nom: "poivron", price: 5, quentity: 10 }
]


return(
    <div>
        <ul>
            {
                produits.map((produit,ind) => 
                <Produit key={ind} item={produit} />)
            }
        </ul>
    </div>
)
}