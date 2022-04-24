import './ColorPicker.css';
import Color from './Color';

const ColorPicker = ({ setColor }) => {

    return (
        <div className="color-picker">
            <Color onClick={() => setColor('var(--red-60)')} id="red" color="var(--red-60)" checked={true} />
            <Color onClick={() => setColor('var(--magenta-60)')} id="magenta" color="var(--magenta-60)" />
            <Color onClick={() => setColor('var(--purple-60)')} id="purple" color="var(--purple-60)" />
            <Color onClick={() => setColor('var(--blue-60)')} id="blue" color="var(--blue-60)" />
            <Color onClick={() => setColor('var(--cyan-60)')} id="cyan" color="var(--cyan-60)" />
            <Color onClick={() => setColor('var(--teal-60)')} id="teal" color="var(--teal-60)" />
            <Color onClick={() => setColor('var(--green-60)')} id="green" color="var(--green-60)" />
        </div>
    );
}
 
export default ColorPicker;