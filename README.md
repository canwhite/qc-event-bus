# qc-event-bus
event bus

## install
```
yarn add qc-event-bus

```

## front
```
import Event from "qc-event-bus"

let event = new Event()
event.on("test",val=>{
    //action
})

event.emit("test","123");

```

## nodejs
```
let Event = new (require("qc-event-bus").default)();

Event.on("test",val=>{
    console.log(val);
})
Event.emit("test","123");

```
