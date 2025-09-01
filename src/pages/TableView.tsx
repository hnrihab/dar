import React from "react";

interface TableViewProps {
  data: any[];
  onEdit: (item: any) => void;
  onDelete: (id: string | number) => void;
}

export default function TableView({ data, onEdit, onDelete }: TableViewProps) {
  if (!data || data.length === 0) return <p>Aucune donnée.</p>;

  const columns = Object.keys(data[0]);

  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="border px-4 py-2">{col}</th>
          ))}
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, idx: number) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col} className="border px-4 py-2">{row[col]}</td>
            ))}
            <td className="border px-4 py-2">
              <button className="bg-yellow-500 px-2 py-1 mr-2 rounded" onClick={() => onEdit(row)}>Modifier</button>
              <button className="bg-red-500 px-2 py-1 rounded" onClick={() => onDelete(row.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
