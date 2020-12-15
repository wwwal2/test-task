import { useState } from 'react';
import './App.css';
import { BARS } from './constants';
import data from './data.json';
import { getTotal } from './utils';
import { SwitchTabs } from './components/SwitchTabs';
import { UtilizationBarsWidget } from './components/UtilizationBarsWidget';
import { UtilizationTextWidget } from './components/UtilizationTextWidget';

export const App = () => {
  const [tab, setTab] = useState(BARS);
  const [isCollapsed, setCollapsed] = useState(false)
  // Each time you switch tab the data will update
  // TODO replace it with useEffect hook and change data with time interval
  const currentData = data[Math.floor(Math.random() * data.length)];

  return (
      <div className="app">
        <div className="dash-line" />
        <button
          onClick={() => setCollapsed(!isCollapsed)}
          className='collapse-button'
        >
          collapse
        </button>
        <div className={`widgets-board ${isCollapsed && 'collapsed'}`}>
          <SwitchTabs setTab={setTab} tab={tab} />
          {(tab === BARS)
            ? (
              <UtilizationBarsWidget 
                currentData={currentData} 
                total={getTotal(currentData)}
              />
            ) : (
              <UtilizationTextWidget 
                currentData={currentData} 
              />
            )
          }
        </div>
      </div>
  );
}
