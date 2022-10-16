// const { useState } = React;
var useState = React.useState;

const GroceryListItem = (props) => {
	const [isDone, setIsDone] = useState(false);

	const style = {
    fontWeight: isDone ? 'bold' : 'normal'
  };

  return (
		<li style={style} onMouseEnter={() => setIsDone(!isDone)}>
			{props.item}
		</li>
	);
};

const GroceryList = (props) => (
  <ul>
  {props.items.map((groceryItem) => (
      <GroceryListItem item={groceryItem} />
  ))}
  </ul>
);

const App = () => (
  <div>
    <h3>To Buy:</h3>
    <GroceryList items={['Milk', 'Bread', 'Eggs', 'Flour', 'Paper Towels']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));

