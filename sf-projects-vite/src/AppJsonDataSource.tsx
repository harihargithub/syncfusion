//App.tsx
import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Filter,
  Group,
  Sort,
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {
  const grid = React.useRef<GridComponent | null>(null);

  React.useEffect(() => {
    if (grid.current) grid.current.autoFitColumns();
  }, []);

  return (
    <div style={{ margin: '2%', marginTop: '2%' }}>
      <GridComponent
        ref={grid}
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 6 }}
        allowFiltering={true}
        allowGrouping={true}
        allowSorting={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="OrderID"
            headerText="Inv ID"
            width="100"
            textAlign="Right"
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="100"
          />
          <ColumnDirective
            field="ShipCity"
            headerText="Ship City"
            width="100"
          />
          <ColumnDirective
            field="ShipRegion"
            headerText="Ship Region"
            width="100"
          />
          <ColumnDirective
            field="ShipName"
            headerText="Ship Name"
            width="100"
          />
          <ColumnDirective
            field="Freight"
            headerText="Freight"
            format="C2"
            width="100"
            textAlign="Right"
          />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group, Sort]} />
      </GridComponent>
    </div>
  );
};

export default App;
