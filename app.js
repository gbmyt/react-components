// TODO
const GroceryList = (props) => (
	<div>
		<h3>To Buy:</h3>
		<ul>
			<GroceryListItem item={props.groceryItems[0]}/>
			<GroceryListItem item={props.groceryItems[1]}/>
			<GroceryListItem item={props.groceryItems[2]}/>
		</ul>
	</div>
);

const GroceryListItem = (prop) => (
	<li>{prop.item}</li>
);

ReactDOM.render(<GroceryList groceryItems={['Milk', 'Bread', 'Eggs']}/>, document.getElementById("app"));