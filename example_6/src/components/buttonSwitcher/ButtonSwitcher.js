import { useState } from "react"

export default function ButtonSwitcher() {
let [disabled, setDisabled] = useState(true)
function switchState() {
setDisabled(etat => !etat)
}
return (
<div>
<button disabled={disabled} onClick={switchState}>
On
</button>
<button disabled={!disabled} onClick={switchState}>
Off
</button>
</div>
)
}