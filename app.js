var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Coffee', 'Almond Milk', 'Bread']}/>
  </div>
)

// var Coffee = () => (
//   <li>Coffee</li>
// )

// var AlmondMilk = () => (
//   <li>Almond Milk</li>
// )

// var Eggs = () => (
//   <li>Eggs</li>
// )


// Reactored using props

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} key={item} />
      )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    //Initialize class component's state
    this.state = {
      done: false,
      hovered: false
    };
  }

  // Add on click event
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  // Add mouse enter event
  onMouseEnter() {
    this.setState({
      hovered: true
    });
  }

  // Add mouse leave event
  onMouseLeave() {
    this.setState({
      hovered: false
    });
  }

  render() {

    // Adding conditional styles based on state
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };

    // Returning component jsx
    return (
      <li
      style={style}
      onClick={this.onListItemClick.bind(this)}
      onMouseEnter={this.onMouseEnter.bind(this)}
      onMouseLeave={this.onMouseLeave.bind(this)}>
        {this.props.item}
      </li>
    );

  }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);