import React from 'react';
import './Destiny.css';



class Destiny extends React.Component {
  
  render() {

  const showAlert= event=> {
    let city = event.target.value;
      alert(`Tu destino es viajar a ${city}`);
    };

    return (
      <div>
      <label for="destiny">elige tu destino:</label>
      <select  onChange={showAlert} id="destiny" name="chose">
        <option value="Buenos aires">Buenos aires</option>
        <option value="Syndey">Syndey</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    </div>
    );
  }


}




export default Destiny;
