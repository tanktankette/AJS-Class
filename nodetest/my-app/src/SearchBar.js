import React, {Component} from 'react'

export default class SearchBar extends Component {
  render () {
    return (
      <section>
        <input
          value = {this.props.searchText}
          onChange = {this.props.searchChange}
          id="product-filter"
          type="text"
          placeholder="search" />
        <br />
        <input
          checked = {this.props.inStockOnlyChecked}
          onChange = {this.props.checkedChange}
          id="instock"
          type="checkbox"
          name="stocked" />
        <label htmlFor="stocked">Stocked Items Only</label>
      </section>
    )
  }
}
