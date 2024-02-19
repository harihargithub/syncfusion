import {
  PivotViewComponent,
  FieldList,
  CalculatedField,
  Inject,
} from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './data';
import './App.css';

/* interface IDataSet {
  Sold: number;
  Amount: number;
  Country: string;
  Products: string;
  Year: string;
  Quarter: string;
} */

function App() {
  return (
    <div id="wrapper">
      <PivotViewComponent
        height={'90%'}
        width={'100%'}
        dataSourceSettings={{
          dataSource: pivotData,
          rows: [{ name: 'Country' }, { name: 'Products' }],
          columns: [{ name: 'Year' }, { name: 'Quarter' }],
          values: [
            { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' },
            { name: 'Total', caption: 'Total Units', type: 'CalculatedField' },
          ],
          filters: [{ name: 'Quarter' }],
          calculatedFieldSettings: [
            {
              name: 'Total',
              formula: '"Sum(Amount)"+"Sum(Sold)"',
            },
          ],
        }}
        showFieldList={true}
        allowCalculatedField={true}
      >
        <Inject services={[FieldList, CalculatedField]}></Inject>
      </PivotViewComponent>
    </div>
  );
}

export default App;

// DataSourceSettings is a property of the PivotViewComponent. The dataSourceSettings property is configured with the dataSource property, which is an object that contains the data for the PivotViewComponent.
