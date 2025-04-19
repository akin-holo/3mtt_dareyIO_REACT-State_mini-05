import './App.css'

const IncreaseButton = ({count, increaseCount}) => {
   return ( 
      <button className="greenBtn" onClick={() => increaseCount(count)}>Increase Count</button>
    );
}
 
export default IncreaseButton;