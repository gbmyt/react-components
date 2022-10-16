const App = () => (
	<div>
		<h3>To Buy:</h3>
		<GroceryList items={['Milk', 'Bread', 'Eggs', 'Flour', 'Paper Towels']}/>
	</div>
);

const GroceryListItem = (props) => (
	<li>{props.item}</li>
);

const GroceryList = (props) => (
	<ul>
		{props.items.map((groceryItem) => (
			<GroceryListItem item={groceryItem} />
		))}
	</ul>
);

ReactDOM.render(<App />, document.getElementById("app"));

