import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            inStockOnlyCheck: false
        }
        this.changeInStockOnlyCheck = this.changeInStockOnlyCheck.bind(this)
    }

    keyGenerator (a, b) {
        return a+b
    }

    changeInStockOnlyCheck() {
        this.setState({inStockOnlyCheck: !this.state.inStockOnlyCheck})
    }

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
            let color = items[i].stocked ? {color: 'black'} : {color: 'red'}
            if (items[i].category !== currentCategory){
                currentCategory = items[i].category
                const ckey = this.keyGenerator('category', i)
                rows.push(<tr key={ckey}><th colSpan="2">{currentCategory}</th></tr>)
            }
            if (!this.state.inStockOnlyCheck | items[i].stocked)
            {
                const key = this.keyGenerator('row', i)
                rows.push(<tr key={key}><td style={color}>{items[i].name}</td><td>{items[i].price}</td></tr>)
            }
        }

        
        return (
            <section>
                <input type="text" placeholder="search" /> 
                <br />
                <input 
                    checked = {this.state.inStockOnlyCheck}
                    onChange = {this.changeInStockOnlyCheck}
                    type="checkbox" 
                    name="stocked" />
                <label htmlFor="stocked">Stocked Items Only</label>
                <table>
                    <tbody>
                        <tr><th>Item</th><th>Price</th></tr>
                        {rows}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default App;
