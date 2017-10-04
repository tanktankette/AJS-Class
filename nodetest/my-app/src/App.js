import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
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

  componentWillMount () {
    this.setState({data: [
      {category: 'Sporting Goods', name: 'Football', price: '$59.99', stocked: true},
      {category: 'Electronics', name: 'iPod Touch', price: '$99.99', stocked: true},
      {category: 'Sporting Goods', name: 'Baseball', price: '$9.99', stocked: true},
      {category: 'Sporting Goods', name: 'Basketball', price: '$29.99', stocked: false},
      {category: 'Electronics', name: 'iPod 5', price: '$399.99', stocked: false},
      {category: 'Electronics', name: 'Nexus 7', price: '$199.99', stocked: true}].sort(this.compare)
    })
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
        <ProductTable
          searchText = {this.state.searchText}
          inStockOnlyChecked = {this.state.inStockOnlyCheck}
          data = {this.state.data}
        />
      </section>
    )
  }
}
export default App
