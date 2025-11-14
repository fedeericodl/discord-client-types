import type * as React from "react";
import type {
  CellProps,
  ColumnProps,
  TableBodyProps as RACTableBodyProps,
  TableHeaderProps as RACTableHeaderProps,
  TableProps as RACTableProps,
  RowProps,
} from "react-aria-components";

export type TableCellProps = Omit<CellProps, "className">;

/**
 * Individual cell component for table data display.
 * Provides accessible cell functionality with keyboard navigation support.
 * @see https://react-spectrum.adobe.com/react-aria/Table.html#cell
 */
export type TableCell = React.FC<TableCellProps>;

export type TableColumnProps = Omit<ColumnProps, "className">;

/**
 * Column component that provides header cell functionality.
 * Supports sorting, resizing, and custom header rendering.
 * @see https://react-spectrum.adobe.com/react-aria/Table.html#column
 */
export type TableColumn = React.FC<TableColumnProps>;

export type TableRowProps<T> = Omit<RowProps<T>, "className">;

/**
 * Row component that contains table cells and provides row-level functionality.
 * Supports selection, expansion, and keyboard navigation between cells.
 * @see https://react-spectrum.adobe.com/react-aria/Table.html#row
 */
export type TableRow = <T>(props: TableRowProps<T>) => React.ReactElement;

export type TableBodyProps<T> = Omit<RACTableBodyProps<T>, "className">;

/**
 * Container component for table rows that manages data rendering and row virtualization.
 * Handles dynamic item rendering and maintains row selection state.
 * @see https://react-spectrum.adobe.com/react-aria/Table.html#tablebody
 */
export type TableBody = <T>(props: TableBodyProps<T>) => React.ReactElement;

export type TableHeaderProps<T> = Omit<RACTableHeaderProps<T>, "className">;

/**
 * Container component for column headers that provides column management functionality.
 * Handles column sorting, resizing, and maintains column state.
 * @see https://react-spectrum.adobe.com/react-aria/Table.html#tableheader
 */
export type TableHeader = <T>(props: TableHeaderProps<T>) => React.ReactElement;

export interface TableProps extends Omit<RACTableProps, "className"> {
  /**
   * The header of the table.
   */
  header?: React.ReactNode;

  /**
   * The footer of the table.
   */
  footer?: React.ReactNode;
}

/**
 * A composable table component that provides accessible data grid functionality.
 * @see https://react-spectrum.adobe.com/react-aria/Table.html
 * @example
 * ```tsx
 * interface User {
 *   id: string;
 *   name: string;
 *   email: string;
 *   role: string;
 * }
 *
 * const [users, setUsers] = React.useState<User[]>([
 *   { id: "1", name: "John", email: "john@example.com", role: "Admin" },
 *   { id: "2", name: "Jane", email: "jane@example.com", role: "User" }
 * ]);
 *
 * const addUser = () => {
 *   const newUser: User = {
 *     id: (users.length + 1).toString(),
 *     name: "New User",
 *     email: "new@example.com",
 *     role: "User",
 *   };
 *   setUsers([...users, newUser]);
 * };
 *
 * <Table
 *   header={<Button onClick={addUser}>Add User</Button>}
 *   footer={<Text>Total users: {users.length}</Text>}
 *   selectionMode="multiple"
 *   onSelectionChange={(selection) => console.log("Selected:", selection)}>
 *   <TableHeader>
 *     <TableColumn isRowHeader>Name</TableColumn>
 *     <TableColumn>Email</TableColumn>
 *     <TableColumn>Role</TableColumn>
 *   </TableHeader>
 *   <TableBody items={users}>
 *     {(user) => (
 *       <TableRow>
 *         <TableCell>{user.name}</TableCell>
 *         <TableCell>{user.email}</TableCell>
 *         <TableCell>{user.role}</TableCell>
 *       </TableRow>
 *     )}
 *   </TableBody>
 * </Table>
 * ```
 */
export type Table = React.FC<React.PropsWithChildren<TableProps>>;
