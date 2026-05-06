import { useParams } from "react-router";

export const MealsList = () => {
  const { type } = useParams();

  console.log(type);
  //fetch list with type

  return <div>some list {type}</div>;
};
