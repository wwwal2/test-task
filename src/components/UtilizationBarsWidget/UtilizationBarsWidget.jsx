import { Bar } from './Bar';
import { widthPercentage } from '../../utils';
import './UtilizationBarsWidget.css';


export const UtilizationBarsWidget = ({ currentData, total }) => {
  const { available, regular, carpool} = currentData;

  return (
    <div className="widget">
      <div className="title">
        utilization({total})
      </div>
      <div className="bars-container">
        <Bar
          title="Available"
          color="#5EEBC8"
          colorLineWidth={widthPercentage(total, available)}
          number={available}
        />
        <Bar
          title="Regular rides"
          color="#0CADFE"
          colorLineWidth={widthPercentage(total, regular)}
          number={regular}
        />
        <Bar
          title="Carpool"
          color="#B27CF9"
          colorLineWidth={widthPercentage(total, carpool)}
          number={carpool}
        />
      </div>
    </div>
  );
};
