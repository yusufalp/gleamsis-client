import React from 'react';

export default function ExpenditureTable() {
  return (

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Budget</th>
          <th>Actual</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Teacher Salary</td>
          <td>$84,000</td>
          <td>$87,432</td>
        </tr>
        <tr>
          <td>Books</td>
          <td>$23,135</td>
          <td>$23,246</td>
        </tr>
        <tr>
          <td>Food</td>
          <td>$3453</td>
          <td>$3453</td>
        </tr>
        <tr>
          <td>Sanitation</td>
          <td>$2500</td>
          <td>$4500</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>TOTAL</th>
          <th>$113,088</th>
          <th>$118,631</th>
        </tr>
      </thead>
    </table>
  )
}