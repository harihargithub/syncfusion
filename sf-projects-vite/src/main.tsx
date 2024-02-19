import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/E-CommApp/eCommApp';
import './index.css';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWH1ceHVVRWVcUExwWkc=',
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
