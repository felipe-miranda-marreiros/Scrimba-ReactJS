import Card from "./Card/Card";
import data from "../data";

const CardSection = () => {
  const cardElement = data.map((cardInfo) => {
    return <Card key={cardInfo.id} info={cardInfo} />;
  });
  return <div className="container card__section">{cardElement}</div>;
};

export default CardSection;
