import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        const items = [
            {category: 'Sporting Goods', name:'Football', price:'$59.99', stocked:true},
            {category: 'Electronics', name:'iPod Touch', price:'$99.99', stocked:true},
            {category: 'Sporting Goods', name:'Baseball', price:'$9.99', stocked:true},
            {category: 'Sporting Goods', name:'Basketball', price:'$29.99', stocked:false},
            {category: 'Electronics', name:'iPod 5', price:'$399.99', stocked:false},
            {category: 'Electronics', name:'Nexus 7', price:'$199.99', stocked:true},
        ]

        const compare = (recordA, recordB) => {
            if (recordA.category > recordB.category) {
                return -1
            }
            if (recordB.category > recordA.category) {
                return 1
            }
            // a must be equal to b
            return 0
        }

        let currentCategory = null
        const rows = []
        items.sort(compare)
        for(let i = 0; i<items.length; i++){
            if (items[i].category !== currentCategory){
                currentCategory = items[i].category
                rows.push(<tr><th colspan="2">{currentCategory}</th></tr>)
            }
            if (items[i].stocked){
                rows.push(<tr><td>{items[i].name}</td><td>{items[i].price}</td></tr>)
            } else {
                rows.push(<tr style={{color:'red'}}><td>{items[i].name}</td><td>{items[i].price}</td></tr>)
            }
        }

        
        return (
            <p>
                <input type="text" placeholder="search" /> 
                <br />
                <input type="checkbox" name="stocked" />
                <label for="stocked">Stocked Items Only</label>
                <table>
                    <tr><th>Item</th><th>Price</th></tr>
                    {rows}
                </table>
            </p>
        )
    }
}

export default App;
