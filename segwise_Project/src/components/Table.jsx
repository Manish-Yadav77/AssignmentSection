import React from 'react';

function Table({ data, onRowClick }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Creative ID</th>
          <th className="py-2 px-4 border-b">Creative Name</th>
          <th className="py-2 px-4 border-b">Country</th>
          <th className="py-2 px-4 border-b">Ad Network</th>
          <th className="py-2 px-4 border-b">OS</th>
          <th className="py-2 px-4 border-b">Campaign</th>
          <th className="py-2 px-4 border-b">Ad Group</th>
          <th className="py-2 px-4 border-b">IPM</th>
          <th className="py-2 px-4 border-b">CTR</th>
          <th className="py-2 px-4 border-b">Spend</th>
          <th className="py-2 px-4 border-b">Impressions</th>
          <th className="py-2 px-4 border-b">Clicks</th>
          <th className="py-2 px-4 border-b">CPM</th>
          <th className="py-2 px-4 border-b">Cost Per Click</th>
          <th className="py-2 px-4 border-b">Cost Per Install</th>
          <th className="py-2 px-4 border-b">Installs</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.creative_id} onClick={() => onRowClick(row)} className="cursor-pointer hover:bg-gray-100">
            <td className="py-2 px-4 border-b">{row.creative_id}</td>
            <td className="py-2 px-4 border-b">{row.creative_name}</td>
            <td className="py-2 px-4 border-b">{row.country}</td>
            <td className="py-2 px-4 border-b">{row.ad_network}</td>
            <td className="py-2 px-4 border-b">{row.os}</td>
            <td className="py-2 px-4 border-b">{row.campaign}</td>
            <td className="py-2 px-4 border-b">{row.ad_group}</td>
            <td className="py-2 px-4 border-b">{row.ipm}</td>
            <td className="py-2 px-4 border-b">{row.ctr}</td>
            <td className="py-2 px-4 border-b">{row.spend}</td>
            <td className="py-2 px-4 border-b">{row.impressions}</td>
            <td className="py-2 px-4 border-b">{row.clicks}</td>
            <td className="py-2 px-4 border-b">{row.cpm}</td>
            <td className="py-2 px-4 border-b">{row.cost_per_click}</td>
            <td className="py-2 px-4 border-b">{row.cost_per_install}</td>
            <td className="py-2 px-4 border-b">{row.installs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;