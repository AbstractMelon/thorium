import React from "react";
import {ReactSortable} from "react-sortablejs";
import {ListGroup, ListGroupItem} from "reactstrap";

const SortableButtonList = ({
  id,
  selectedButton,
  setSelectedButton,
  buttons,
  onSortEnd,
  ...props
}: {
  id: string;
  selectedButton?: string | null;
  setSelectedButton: (id: string) => void;
  buttons: {id: string; name: string; category: string}[];
  onSortEnd: ({oldIndex, newIndex}: {oldIndex: number; newIndex: number}) => void;
}) => {
  const [localButtons, setLocalButtons] = React.useState(buttons);

  React.useEffect(() => {
    setLocalButtons(buttons);
  }, [buttons]);

  return (
    <ListGroup style={{maxHeight: "60vh", overflowY: "auto"}} {...props}>
      <ReactSortable
        list={localButtons}
        setList={setLocalButtons}
        onEnd={evt => {
          if (evt.oldIndex == null || evt.newIndex == null) return;
          onSortEnd({oldIndex: evt.oldIndex, newIndex: evt.newIndex});
        }}
      >
        {localButtons.map(button => (
          <ListGroupItem
            key={`${button.id}`}
            onClick={() => setSelectedButton(button.id)}
            active={button.id === selectedButton}
          >
            {button.name}
            <br />
            <small>{button.category}</small>
          </ListGroupItem>
        ))}
      </ReactSortable>
    </ListGroup>
  );
};

export default SortableButtonList;
