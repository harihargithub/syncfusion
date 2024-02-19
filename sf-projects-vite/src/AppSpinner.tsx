import React from 'react';
import { DialogComponent } from '@syncfusion/ej2-react-popups';

function App() {
  return (
    <DialogComponent
      visible={true}
      showCloseIcon={false}
      isModal={true}
      width="100px"
      height="100px"
      animationSettings={{ effect: 'None' }}
    >
      <div style={{ textAlign: 'center', padding: '10px' }}>Loading...</div>
    </DialogComponent>
  );
}

export default App;
