import { Event, EventBus, EventHandler, EventType } from "epic-engine";
class SomeType extends EventType {
}
const eventBus = new EventBus();
const handler = new EventHandler(eventBus, "sometype", (event) => {
    console.log("it worked :D");
});
eventBus.createHandler(handler);
const event = new Event(eventBus, new SomeType(), "sometype");
eventBus.createEvent(event);
event.send(eventBus);
