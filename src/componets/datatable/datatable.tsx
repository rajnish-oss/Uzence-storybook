import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
  theme?: 'light' | 'dark';
}

function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  theme = 'light',
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;
    const direction = sortConfig?.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: column.dataIndex, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const handleRowSelect = (row: T) => {
    let updatedSelection: T[];
    if (selectedRows.includes(row)) {
      updatedSelection = selectedRows.filter(r => r !== row);
    } else {
      updatedSelection = selectable === true ? [...selectedRows, row] : [row];
    }
    setSelectedRows(updatedSelection);
    onRowSelect?.(updatedSelection);
  };

  // Theme classes
  const tableBg = theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100';
  const tableBorder = theme === 'dark' ? 'border-zinc-700' : 'border-zinc-200';
  const rowBg = theme === 'dark' ? ['bg-zinc-700', 'bg-zinc-600'] : ['bg-white', 'bg-zinc-50'];
  const rowHover = theme === 'dark' ? 'hover:bg-zinc-600' : 'hover:bg-zinc-100';
  const textColor = theme === 'dark' ? 'text-white' : 'text-zinc-800';
  const checkboxColor = theme === 'dark' ? 'accent-blue-400' : 'accent-blue-600';
  const noDataText = theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500';

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-6 ${textColor}`} aria-busy="true" aria-label="Loading data">
        <Loader2 className="animate-spin text-zinc-400" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className={`text-center p-6 ${noDataText}`} aria-label="No data available">
        No data available
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto w-full border ${tableBorder} rounded-lg shadow-sm`}>
      <table className="min-w-full border-collapse">
        <thead className={tableBg}>
          <tr>
            {selectable && <th className="p-2"></th>}
            {columns.map(col => (
              <th
                key={col.key}
                onClick={() => handleSort(col)}
                className={`p-2 text-left font-semibold cursor-pointer ${col.sortable ? 'hover:underline' : ''} ${textColor}`}
                aria-sort={
                  sortConfig?.key === col.dataIndex
                    ? sortConfig.direction === 'asc'
                      ? 'ascending'
                      : 'descending'
                    : 'none'
                }
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              className={`${rowBg[idx % 2]} ${rowHover} cursor-pointer`}
              onClick={() => selectable && handleRowSelect(row)}
              aria-selected={selectedRows.includes(row)}
            >
              {selectable && (
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleRowSelect(row)}
                    className={checkboxColor}
                    aria-label="Select row"
                  />
                </td>
              )}
              {columns.map(col => (
                <td key={col.key} className={`p-2 border-t ${tableBorder} ${textColor}`}>
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
