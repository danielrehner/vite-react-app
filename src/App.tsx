import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <Alert>Hellow World</Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
