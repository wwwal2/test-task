import './UtilizationTextWidget.css';


export const UtilizationTextWidget = ({ currentData }) => {
  const { available, regular, carpool} = currentData;

  return (
    <div className="widget">
      <div className="title">
        UTILIZATION TEXT
      </div>
      <div className="bar-container text-container">
        <p>Available: {available}</p>
        <p>Regular Rides: {regular}</p>
        <p>Carpool: {carpool}</p>
      </div>
    </div>
  );
};
