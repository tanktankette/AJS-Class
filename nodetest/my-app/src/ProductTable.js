import React, {Component} from 'react'

export default class ProductTable extends Component {
  render () {
    let currentCategory = null
    const filtered = this.props.data.filter((record) => record.name.includes(this.props.searchText))
    const rows = []

    filtered.forEach((record) => {
      let color = record.stocked ? {color: 'black'} : {color: 'red'}
      if (record.category !== currentCategory) {
        currentCategory = record.category
        rows.push(<tr key={currentCategory}><th colSpan="2">{currentCategory}</th></tr>)
      }
      if (!this.props.inStockOnlyChecked | record.stocked) {
        rows.push(<tr key={record.category + record.name}><td style={color}>{record.name}</td><td>{record.price}</td></tr>)
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