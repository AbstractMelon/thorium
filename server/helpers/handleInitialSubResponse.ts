import {v4 as uuidv4} from "uuid";

export function handleInitialSubResponse(fn: (id: string) => void) {
  const id = uuidv4();
  process.nextTick(() => {
    fn(id);
  });
  return id;
}
