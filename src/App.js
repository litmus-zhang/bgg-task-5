import Body from './components/body/Body';
import Navbar from './components/navbar/Navbar';
import './App.scss'
import Widget from './components/widget/Widget';


function App() {

  const date = new Date
  const Y = date.getFullYear()
  return (
    <div className="App">
      <Navbar/>
      <Body />
      {/* <div  className="Widget">
      <Widget title="Rewards"/>
      <Widget title="Stakes"/>
      <Widget title="Balance"/>
      </div> */}
      
      {/* <div className='footer'>
        <p>Copyright {Y}</p>
        <div>
        <p>Terms and Condition</p>
        <p>Privacy Policy</p>
        </div>
        
      </div> */}
    </div>
  );
}

export default App;
