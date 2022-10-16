// TODO
const GroceryList = () => (
	<ul>
		<Milk />
		<Eggs />
	</ul>
);

const Milk = () => (
	<li>Milk</li>
);

const Eggs = () => (
	<li>Eggs</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));