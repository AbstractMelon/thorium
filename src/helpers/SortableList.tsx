import React from "react";
import {ReactSortable} from "react-sortablejs";
import {ListGroup, ListGroupItem} from "reactstrap";
import {FaBan} from "react-icons/fa";

const SortableList = ({
  items,
  setSelectedItem,
  selectedItem,
  removeItem,
  onSortEnd,
  ...props
}: {
  items: {name: string; id: string}[];
  setSelectedItem: (id: string) => void;
  selectedItem?: string | null;
  removeItem?: (id: string) => void;
  onSortEnd?: ({oldIndex, newIndex}: {oldIndex: number; newIndex: number}) => void;
}) => {
  const [localItems, setLocalItems] = React.useState(items);

  React.useEffect(() => {
    setLocalItems(items);
  }, [items]);

  return (
    <ListGroup {...props}>
      <ReactSortable
        list={localItems}
        setList={setLocalItems}
        onEnd={evt => {
          if (evt.oldIndex == null || evt.newIndex == null) return;
          onSortEnd?.({oldIndex: evt.oldIndex, newIndex: evt.newIndex});
        }}
      >
        {localItems.map(item => {
          return (
            <ListGroupItem
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              active={item.id === selectedItem}
            >
              {item.name}
              {removeItem && (
                <FaBan className="text-danger" onClick={() => removeItem(item.id)} />
              )}
            </ListGroupItem>
          );
        })}
      </ReactSortable>
    </ListGroup>
  );
};

export default SortableList;
