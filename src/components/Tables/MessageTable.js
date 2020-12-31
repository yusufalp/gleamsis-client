import React from 'react';

export default function MessageTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Yusuf Alp</td>
          <td>Requesting purchase approval</td>
        </tr>
        <tr>
          <td>Thinkful</td>
          <td>Congratulations!</td>
        </tr>
      </tbody>
    </table>
  );
}