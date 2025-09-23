import { useSelector } from 'react-redux';
import { increment, decrement, incrementAvecPas, decrementAvecPas }
from '../stores/counter-slice';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

return (
<div>
<h1>Compteur : {count}</h1>
<button onClick={() => dispatch(increment())}>Incr´ementer</
button>
<button onClick={() => dispatch(decrement())}>D´ecr´ementer</
button>
<div>
<input
type="number"
value={step}
onChange={(e) => setStep(Number(e.target.value))}
/>
<button onClick={() => dispatch(incrementAvecPas(step))}>
Incr´ementer avec pas ({step})
</button>
<button onClick={() => dispatch(decrementAvecPas(step))}>
D´ecr´ementer avec pas ({step})
</button>
</div>
</div>
);
};
export default Counter;