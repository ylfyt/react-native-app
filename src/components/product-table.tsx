import {FC} from 'react';
import {DataTable} from 'react-native-paper';
import {IProduct} from '../interfaces/product';

interface ProductTableProps {
  products: IProduct[];
}

export const ProductTable: FC<ProductTableProps> = ({products}) => {
  return (
    <DataTable
      style={{
        paddingHorizontal: 10,
      }}>
      <DataTable.Header
        style={{
          backgroundColor: '#dcdcdc',
        }}>
        <DataTable.Title
          style={{
            width: 10,
          }}>
          Id
        </DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Description</DataTable.Title>
      </DataTable.Header>
      {products.map((product, idx) => (
        <DataTable.Row key={idx}>
          <DataTable.Cell
            style={{
              width: 10,
            }}>
            {product.id}
          </DataTable.Cell>
          <DataTable.Cell>{product.name}</DataTable.Cell>
          <DataTable.Cell>{product.description}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};
