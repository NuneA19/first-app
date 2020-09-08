import React from 'react';
import './App.css';
import Product from './components/product/Product'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
<Product name='bananas' price='1$' description='Fresh bananas from Ecuador' />
        <Product name='apple' price='2$' description='Fresh apple' />
        <Product name='lemon' price='3.5$' description='lemon apple' />

      </header>
    </div>
  );
}

export default App;
