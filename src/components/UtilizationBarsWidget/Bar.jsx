import { getIcon } from '../../utils';
import './Bar.css';

export const Bar = ({
  color,
  colorLineWidth,
  title,
  number,
}) => (
    <div className="bar-container">
      <div className="bar-text">
        {title}
      </div>
      <div className="bar-line">
        {getIcon(color)}
        <div className="colored-filler" style={{backgroundColor: color, width: `${colorLineWidth}%`}} />
        <div className="filler"/>
        <div className="bar-text">
          {number}
        </div>
      </div>
    </div>
    
  );
