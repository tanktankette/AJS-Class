import React, {Component} from 'react'
import ProductRow from './ProductRow'
import CategoryRow from './CategoryRow'

export default class ProductTable extends Component {
  render () {
    let currentCategory = null
    const filtered = this.props.data.filter((record) => record.name.includes(this.props.searchText))
    const rows = []

    filtered.forEach((record) => {
      if (record.category !== currentCategory) {
        currentCategory = record.category
        rows.push(<CategoryRow currentCategory={currentCategory} />)
      }
      if (!this.props.inStockOnlyChecked | record.stocked) {
        rows.push(<ProductRow record={record} />)
      }
    })

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
