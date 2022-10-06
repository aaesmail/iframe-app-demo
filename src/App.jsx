import { Fragment, useState } from 'react';

import TopNavbar from './components/TopNavbar/TopNavbar';
import SideNavbar from './components/SideNavbar/SideNavbar';
import IFrame from './components/IFrame/IFrame';

import './App.css';

function App() {
  const [baseUrl, setBaseUrl] = useState('');
  const [appName, setAppName] = useState('');
  const [appMode, setAppMode] = useState('');
  const [selectedToken, setSelectedToken] = useState('');

  return (
    <Fragment>
      <TopNavbar
        url={baseUrl}
        changeUrl={(url) => setBaseUrl(url)}
        appName={appName}
        changeAppName={(name) => setAppName(name)}
        appMode={appMode}
        changeAppMode={(mode) => setAppMode(mode)}
      />

      <div className='body'>
        <SideNavbar
          selectedToken={selectedToken}
          onCardClick={setSelectedToken}
        />

        <IFrame
          baseUrl={baseUrl}
          appName={appName}
          appMode={appMode}
          token={selectedToken}
        />
      </div>
    </Fragment>
  );
}

export default App;
