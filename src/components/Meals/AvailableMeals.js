import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Pizza Margherita",
    description: "Italian, crispy, delicious",
    price: 22.5,
  },
  {
    id: "m6",
    name: "Pasta Bolognese",
    description: "Italian classic",
    price: 15.99,
  },
  {
    id: "m8",
    name: "Ramen",
    description: "Japanese noodle soup ",
    price: 12.99,
  },
  {
    id: "m9",
    name: "Moussaka",
    description: "Greek delicious Moussaka",
    price: 10.99,
  },
  {
    id: "m10",
    name: "Beef Bourgignon",
    description: "French beef stew braised in red wine",
    price: 25.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
