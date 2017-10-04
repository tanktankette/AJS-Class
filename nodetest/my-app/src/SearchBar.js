import React, {Component} from 'react'

export default class SearchBar extends Component {
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
