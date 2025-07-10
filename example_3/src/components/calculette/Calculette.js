export default function Calculette() {
var valeur1 = 0
var valeur2 = 0
const sendValue = (e) => {
        if (e.target.name === 'valeur1') {
        valeur1 = e.target.value
        } else {
        valeur2 = e.target.value
        }
}
const somme = () => {
    alert(Number(valeur1) + Number(valeur2))
}
return (
<div>
<h2>Calculette</h2>
Valeur 1 : <input type="number" name="valeur1" onInput={sendValue} />
Valeur 2 : <input type="number" name="valeur2" onInput={sendValue} />
<button onClick={somme}>+</button>
</div>
)
}