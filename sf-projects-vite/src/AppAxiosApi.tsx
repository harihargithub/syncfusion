import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const newData = response.data.map((user) => {
          const { geo, ...address } = user.address; // exclude geo
          return { ...user, address };
        });
        setData(newData);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 6 }}
        allowFiltering={true}
        allowGrouping={true}
        allowSorting={true}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="id"
            headerText="ID"
            width="120"
            textAlign="Right"
          />
          <ColumnDirective field="name" headerText="Name" width="150" />
          <ColumnDirective field="username" headerText="Username" width="150" />
          <ColumnDirective field="email" headerText="Email" width="150" />
          <ColumnDirective
            field="address.street"
            headerText="Street"
            width="150"
          />
          <ColumnDirective
            field="address.suite"
            headerText="Suite"
            width="150"
          />
          <ColumnDirective field="address.city" headerText="City" width="150" />
          <ColumnDirective
            field="address.zipcode"
            headerText="Zipcode"
            width="150"
          />
          <ColumnDirective field="phone" headerText="Phone" width="150" />
          <ColumnDirective field="website" headerText="Website" width="150" />
          <ColumnDirective
            field="company.name"
            headerText="Company Name"
            width="150"
          />
          <ColumnDirective
            field="company.catchPhrase"
            headerText="Catch Phrase"
            width="150"
          />
          <ColumnDirective field="company.bs" headerText="BS" width="150" />
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group, Sort]} />
      </GridComponent>
    </div>
  );
};

export default App;
