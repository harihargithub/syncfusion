import React, { useState, useEffect } from 'react';
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
// import { Ajax } from '@syncfusion/ej2-base';
import axios from 'axios';
import './App.css';

interface IOrder {
  OrderID: number;
  CustomerID: string;
  ShipCountry: string;
  ShipName: string;
  Freight: number;
  // Other properties as needed can be added here
}

/* interface IResponse {
  data: IOrder[];
} */

const App: React.FC = () => {
  const [data, setData] = useState<IOrder[]>([]);
  useEffect(() => {
    // ajax
    /* const ajax = new Ajax(
      'https://services.odata.org/V4/Northwind/Northwind.svc/Orders',
      'GET',
    );
    ajax.send();
    ajax.onSuccess = (data: any) => {
      setData(JSON.parse(data).value);
    }; */

    // fetch native api
    // fetch("https://ej2services.syncfusion.com/production/web-services/api/Orders")
    //   .then(res => res.json())
    //   .then(
    //     data => {
    //       setData(data);
    //     }
    //   );

    // axios
    axios
      .get<IOrder[]>(
        'https://ej2services.syncfusion.com/production/web-services/api/Orders',
      )
      .then((res) => {
        const dataWithSerial = res.data.map((item: IOrder, index: number) => ({
          ...item,
          SerialNo: index + 1,
        }));
        setData(dataWithSerial);
      });
  }, []);

  /*
  datawithserial uses map to add a new property to each item in the array of objects returned by the API. The new property is SerialNo, which is the index of the item in the array plus 1. The index is zero-based, so the first item has an index of 0, and the first serial number is 1. The new array of objects is assigned to the data state variable. The GridComponent is rendered with the data state variable as the dataSource property value. The GridComponent is configured to display paging with six rows per page. The GridComponent is also configured to display six columns. The first column is SerialNo, which is right-aligned and has a width of 100 pixels. The second column is OrderID, which is right-aligned and has a width of 100 pixels. The third column is CustomerID, which has a width of 150 pixels. The fourth column is ShipCountry, which has a width of 150 pixels. The fifth column is ShipName, which has a width of 150 pixels. The sixth column is Freight, which is right-aligned, has a width of 100 pixels, and is formatted as currency with two decimal places. The GridComponent is configured to display the Page component, which displays the page size selector and the page number selector at the bottom of the GridComponent ie. the footer row. The GridComponent is configured to display the Page component by using the Inject component. The Inject component is configured to display the Page component by using the services property. The GridComponent is rendered inside a div element with a margin of 10% and a marginTop of 5%.
  */

  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <h1>AJAX Libraries - fetch API, Axios</h1>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 12 }}
        allowFiltering={true}
        allowGrouping={true}
        allowSorting={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="SerialNo"
            headerText="Serial No"
            textAlign="Right"
            width="100"
          />
          <ColumnDirective
            field="OrderID"
            headerText="Invoice ID"
            textAlign="Right"
            width="100"
          />
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            width="150"
          />
          <ColumnDirective field="ShipCountry" headerText="Ship Country" />
          <ColumnDirective field="ShipName" headerText="Ship Name" />
          <ColumnDirective
            field="Freight"
            textAlign="Right"
            format="C2"
            width="100"
          />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group, Sort]} />
      </GridComponent>
    </div>
  );
};

export default App;
