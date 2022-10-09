import { Fragment, useState } from 'react';

import TopNavbar from './components/TopNavbar/TopNavbar';
import SideNavbar from './components/SideNavbar/SideNavbar';
import IFrame from './components/IFrame/IFrame';

import './App.css';

function App() {
  const [baseUrl, setBaseUrl] = useState('');
  const [appToken, setAppToken] = useState('');
  const [selectedToken, setSelectedToken] = useState('');

  return (
    <Fragment>
      <TopNavbar
        url={baseUrl}
        changeUrl={(url) => setBaseUrl(url)}
        appToken={appToken}
        changeAppToken={(name) => setAppToken(name)}
      />

      <div className='body'>
        <SideNavbar
          selectedToken={selectedToken}
          onCardClick={setSelectedToken}
        />

        <IFrame
          baseUrl={baseUrl}
          appToken={appToken}
          token={selectedToken}
        />
      </div>
    </Fragment>
  );
}

export default App;
