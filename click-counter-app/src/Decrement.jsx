import './App.css'

const DecreaseButton = ({count, decreaseCount}) => {
   return ( 
      <button className='redBtn' onClick={() => decreaseCount(count)}>Decrease Count</button>
    );
}
 
export default DecreaseButton;