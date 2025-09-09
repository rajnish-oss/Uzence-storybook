// DataTable.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './datatable';
import type { DataTableProps,Column } from './datatable';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Define table columns
const columns: Column<User>[] = [
  { key: 'id', title: 'ID', dataIndex: 'id', sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
];

// Sample data
const data: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 28 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 35 },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 22 },
];

// Storybook metadata
const meta: Meta<DataTableProps<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<DataTableProps<User>>;

// Default usage
export const Default: Story = {
  args: {
    data,
    columns,
    selectable: false,
    loading: false,
    onRowSelect: (rows) => console.log('Selected rows:', rows),
  },
};

// Selectable table example
export const Selectable: Story = {
  args: {
    data,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log('Selected rows:', rows),
  },
};

// Loading state
export const Loading: Story = {
  args: {
    data: [],
    columns,
    loading: true,
  },
};
