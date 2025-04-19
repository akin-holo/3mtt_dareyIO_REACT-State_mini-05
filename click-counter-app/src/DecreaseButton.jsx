import './App.css'

const Decrement = ({count, decreaseCount}) => {
   return ( 
      <button className='redBtn' onClick={() => decreaseCount(count)}>Decrease Count</button>
    );
}
 
export default Decrement;