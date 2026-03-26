import React from "react";
import {ReactSortable} from "react-sortablejs";
import {ListGroup, ListGroupItem} from "reactstrap";
import EventName from "../MissionConfig/EventName";
import {FaBan} from "react-icons/fa";

const SortableActionList = ({
  id,
  selectedAction,
  setSelectedAction,
  removeAction,
  actions,
  onSortEnd,
  ...props
}: {
  id: string;
  selectedAction?: string | null;
  setSelectedAction: (id: string) => void;
  removeAction: (id: string) => void;
  actions: {id: string; event: string}[];
  onSortEnd: ({oldIndex, newIndex}: {oldIndex: number; newIndex: number}) => void;
}) => {
  const [localActions, setLocalActions] = React.useState(actions);

  React.useEffect(() => {
    setLocalActions(actions);
  }, [actions]);

  return (
    <ListGroup style={{maxHeight: "60vh", overflowY: "auto"}} {...props}>
      <ReactSortable
        list={localActions}
        setList={setLocalActions}
        onEnd={evt => {
          if (evt.oldIndex == null || evt.newIndex == null) return;
          onSortEnd({oldIndex: evt.oldIndex, newIndex: evt.newIndex});
        }}
      >
        {localActions.map(event => (
          <ListGroupItem
            key={`${id}-${event.id}`}
            onClick={() => setSelectedAction(event.id)}
            active={event.id === selectedAction}
          >
            <EventName id={event.event} />{" "}
            <FaBan
              className="text-danger pull-right"
              onClick={() => removeAction(event.id)}
            />
          </ListGroupItem>
        ))}
      </ReactSortable>
    </ListGroup>
  );
};

export default SortableActionList;
