import locationIcon from "../../images/location-icon.png";
import "../../Sass/TravelInfo.scss";

const TravelInfo = (props) => {
  const { item } = props;
  return (
    <div className="container travelinfo">
      <img src={item.imageUrl} className="travelinfo-img" />
      <section className="travelinfo__content">
        <div className="travelinfo__content-info">
          <img src={locationIcon} alt="Location" />
          <span className="travelinfo__content-location">{item.location}</span>
          <a href="#" className="travelinfo__content-link">
            View on Google Maps
          </a>
        </div>
        <div className="travelinfo__description">
          <h2 className="travelinfo__description-title">{item.title}</h2>
          <div className="travelinfo__description-date">
            <span>{item.startDate}</span> - <span>{item.endDate}</span>
          </div>
          <p className="travelinfo__description-paragraph">
            {item.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default TravelInfo;
