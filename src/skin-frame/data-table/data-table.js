import React from 'react'
import './data-table.css'

/*
columns:[
    {
        fieldName
        width,
        title,
        align,
        renderCallback,
        renderHeaderCallback
    }
],
data: [{
    fieldName: value,
    ...
}]
 */

const DataTable = ({ columns, data, style }) => {
    return (
        <div style={style} className={'data-table'}>
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => {
                            return (
                                <th
                                    key={column.fieldName}
                                    style={{ width: column.width }}
                                >
                                    {column.renderHeaderCallback
                                        ? column.renderHeaderCallback(
                                              column.fieldName,
                                              column.title
                                          )
                                        : column.title}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0
                        ? data.map((row, idx) => {
                              return (
                                  <tr key={idx}>
                                      {columns.map((column) => {
                                          return (
                                              <td
                                                  key={
                                                      idx +
                                                      '.' +
                                                      column.fieldName
                                                  }
                                                  style={{
                                                      textAlign:
                                                          column.align ||
                                                          'center',
                                                  }}
                                              >
                                                  {column.renderCallback
                                                      ? column.renderCallback(
                                                            column.fieldName,
                                                            row[
                                                                column.fieldName
                                                            ]
                                                        )
                                                      : row[column.fieldName]}
                                              </td>
                                          )
                                      })}
                                  </tr>
                              )
                          })
                        : null}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
