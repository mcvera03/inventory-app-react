import React from 'react'
export default function Table({ columns, data }){
  return (
    <table className="table">
      <thead>
        <tr>{columns.map(c=>(<th key={c.key}>{c.title}</th>))}</tr>
      </thead>
      <tbody>
        {data.map(row=>(
          <tr key={row.id || JSON.stringify(row)}>
            {columns.map(c=> <td key={c.key + (row.id||'')}>{row[c.key]}</td> )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
