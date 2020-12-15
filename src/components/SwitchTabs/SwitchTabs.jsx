import './SwitchTabs.css';
import { BARS, TEXT } from '../../constants';

export const SwitchTabs = ({ setTab, tab }) => {
  return (
    <div className="switch-tabs-container">
      <button 
        className={`switch-btn ${(tab === BARS) && 'active-btn'}`}
        onClick={() => setTab(BARS)}
      >
        {BARS}
      </button>
      <button 
        className={`switch-btn ${(tab === TEXT) && 'active-btn'}`}
        onClick={() => setTab(TEXT)}>
        {TEXT}
      </button>
    </div>
  );
};
