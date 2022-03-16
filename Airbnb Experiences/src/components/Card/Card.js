import "../../Sass/Card.scss";
import starFigure from "../../images/star-card.png";

const Card = (props) => {
  const { info } = props;

  let badgeText;
  if (info.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (info.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <div className="card__content-info">
        <img
          src={info.coverImg}
          alt="Airbnb card"
          className="card__content-img"
        />
        {badgeText && <div className="card__content-status">{badgeText}</div>}
      </div>
      <div className="card__content-text">
        <div className="card__content-rate">
          <img src={starFigure} alt="rate" className="card__content-figure" />
          <div className="card-info">
            <span className="card-rate">{info.stats.rating}</span>(
            {info.stats.reviewCount}) {info.location}
          </div>
        </div>
        <div className="card__content-description">
          <div>{info.title}</div>
        </div>
        <div className="card__content-description-item">
          <span>From ${info.price}</span> / person
        </div>
      </div>
    </div>
  );
};

export default Card;
