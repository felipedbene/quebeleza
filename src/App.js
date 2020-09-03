import React from 'react';
import logo from './imgs/quebeleza2.jpg'
import './App.css';

function App() {
  return (
    <div className="back">
      
        <img src={logo} className="qblz" alt="logo" />
        <p className="morada">
          Proximamente....
          </p>
          <p className="lorem"> 


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim in tortor ut malesuada. Phasellus sed erat non enim ultrices ornare. Donec fringilla hendrerit tellus, ut facilisis leo auctor eu. Duis in ipsum at justo auctor elementum. Morbi pellentesque mi urna, ac pharetra elit lacinia at. Fusce vel sem non diam consequat suscipit. In eget eros urna. Maecenas lobortis mattis aliquam. Sed non finibus mi. Donec at quam vitae sem congue bibendum. Donec volutpat, ex vel rutrum tincidunt, nunc purus consequat sem, et molestie quam sem non sapien.
</p>
<ul className="lorem-list">
<li>
Lorem ipsum dolor sit amet
</li>
<li>Consectetur adipiscing elit</li>
<li>Phasellus sed erat non enim ultrices ornare.</li>
<li>Sed dignissim in tortor ut malesuada</li>
</ul>
<form>
  <label className="lorem">
    Correo eletronico:   
     <input type="text" name="name" />
  </label><br />
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;
