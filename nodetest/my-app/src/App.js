import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inStockOnlyCheck: false,
      searchText: '',
      data: []
    }
    this.changeInStockOnlyCheck = this.changeInStockOnlyCheck.bind(this)
    this.changeSearchText = this.changeSearchText.bind(this)
  }

  componentWillMount () {
    this.setState({data: [
      {category: 'Sporting Goods', name: 'Football', price: '$59.99', stocked: true},
      {category: 'Electronics', name: 'iPod Touch', price: '$99.99', stocked: true},
      {category: 'Sporting Goods', name: 'Baseball', price: '$9.99', stocked: true},
      {category: 'Sporting Goods', name: 'Basketball', price: '$29.99', stocked: false},
      {category: 'Electronics', name: 'iPod 5', price: '$399.99', stocked: false},
      {category: 'Electronics', name: 'Nexus 7', price: '$199.99', stocked: true}
    ]})
  }

  changeInStockOnlyCheck () {
    this.setState({inStockOnlyCheck: !this.state.inStockOnlyCheck})
  }

  changeSearchText (event) {
    this.setState({searchText: event.target.value})
  }

  render () {
    return (
      <section>
        <SearchBar
          searchText = {this.state.searchText}
          searchChange = {this.changeSearchText}
          inStockOnlyChecked = {this.state.inStockOnlyCheck}
          checkedChange = {this.changeInStockOnlyCheck}
        />
        <ProductList
          searchText = {this.state.searchText}
          inStockOnlyChecked = {this.state.inStockOnlyCheck}
          data = {this.state.data}
        />
      </section>
    )
  }
}

class SearchBar extends Component {
  render () {
    return (
      <section>
        <input
          value = {this.props.searchText}
          onChange = {this.props.searchChange}
          type="text"
          placeholder="search" />
        <br />
        <input
          checked = {this.props.inStockOnlyChecked}
          onChange = {this.props.checkedChange}
          type="checkbox"
          name="stocked" />
        <label htmlFor="stocked">Stocked Items Only</label>
      </section>
    )
  }
}

class ProductList extends Component {
  keyGenerator (a, b) {
    return a + b
  }

  compare (recordA, recordB) {
    if (recordA.category > recordB.category) {
      return -1
    }
    if (recordB.category > recordA.category) {
      return 1
    }
    // a must be equal to b
    return 0
  }

  render () {
    let currentCategory = null
    const filtered = this.props.data.filter((record) => record.name.includes(this.props.searchText))
    filtered.sort(this.compare)
    const rows = []

    for (let i = 0; i < filtered.length; i++) {
      let color = filtered[i].stocked ? {color: 'black'} : {color: 'red'}
      if (filtered[i].category !== currentCategory) {
        currentCategory = filtered[i].category
        const ckey = this.keyGenerator('category', i)
        rows.push(<tr key={ckey}><th colSpan="2">{currentCategory}</th></tr>)
      }
      if (!this.props.inStockOnlyChecked | filtered[i].stocked) {
        const key = this.keyGenerator('row', i)
        rows.push(<tr key={key}><td style={color}>{filtered[i].name}</td><td>{filtered[i].price}</td></tr>)
      }
    }

    return (
      <table>
        <tbody>
          <tr><th>Item</th><th>Price</th></tr>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default App
