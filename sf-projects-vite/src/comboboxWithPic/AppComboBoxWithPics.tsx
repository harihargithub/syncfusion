import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { employees } from './comboboxEmpData';
import './comboboxcss.css';

interface CustomItemsProps {
  EmployeeID: number;
  Name: string;
  Designation: string;
}

function App() {
  const divStyle = {
    margin: 100,
    width: 250,
  };
  const customItems = (props: CustomItemsProps) => {
    return (
      <div>
        <img
          className="empImg"
          src={
            'https://ej2.syncfusion.com/react/demos/src/combo-box/Employees/' +
            props.EmployeeID +
            '.png'
          }
          alt="Emp Pic"
        />
        <div className="ename">{props.Name}</div>
        <div className="ejob">{props.Designation}</div>
      </div>
    );
  };
  const customHeader = () => {
    return (
      <div className="header">
        <span>Photo</span>
        <span className="columnHeader">Employee Info</span>
      </div>
    );
  };
  const customFooter = () => {
    return (
      <div className="footer">
        Add new items <span className="e-icons plus"></span>
      </div>
    );
  };
  return (
    <div style={divStyle}>
      <ComboBoxComponent
        dataSource={employees}
        placeholder="Select a name"
        itemTemplate={customItems}
        headerTemplate={customHeader}
        footerTemplate={customFooter}
        noRecordsTemplate="No records available !!!"
        fields={{ value: 'EmployeeID', text: 'Name' }}
      ></ComboBoxComponent>
    </div>
  );
}

export default App;
