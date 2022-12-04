import { useState } from "react";
import { Filters } from "./Components/Filters/Filters";
import { ListItem } from "./Components/ListItem/ListItem";
import Button from "@mui/material/Button";

const mock_items = [
  {
    status: false,
    title: "Синий",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "39-й розмер",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "39,5-й размер",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "40-й размер",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "41-й размер",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "8GB",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "16GB",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "32GB",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "Space grey",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "Rose gold",
    id: "id",
    image: "blue",
  },
  {
    status: false,
    title: "Silver",
    id: "id",
    image: "blue",
  },
];

function App() {
  const [showCreate, setShowCreate] = useState(false);
  const [items, setItems] = useState(mock_items);
  const showDeleteBtn = !!items.filter((el) => el?.selected).length;

  const removeItem = (id) => {
    items.splice(id, 1);
    setItems([...items]);
  };

  const changeItem = (id, prop, itemParam) => {
    items[id][itemParam] = prop;
    setItems([...items]);
  };

  const selectItem = (id) => {
    items[id].selected = !items[id]?.selected;
    setItems([...items]);
  };

  const addItem = (title, id, image) => {
    setShowCreate(false);
    items.unshift({
      status: false,
      id,
      image,
      title,
    });

    setItems([...items]);
  };

  const deleteFunc = () => {
    setItems(items.filter((el) => !el?.selected));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 400,
          backgroundColor: "lightgray",
          padding: 25,
          borderRadius: 15,
        }}
      >
        <Filters
          setShowCreate={setShowCreate}
          showDeleteBtn={showDeleteBtn}
          deleteFunc={deleteFunc}
        />

        {showCreate ? (
          <ListItem
            remove={() => setShowCreate(false)}
            inputActive={true}
            addItem={addItem}
          />
        ) : (
          ""
        )}

        {items.map((el, id) => (
          <ListItem
            status={el.status}
            id={el.id}
            title={el.title}
            image={el.image}
            remove={removeItem.bind(undefined, id)}
            changeItem={changeItem.bind(undefined, id)}
            selectItem={selectItem.bind(undefined, id)}
            isSelected={el?.selected}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
