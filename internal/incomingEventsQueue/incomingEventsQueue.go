package incomingEventsQueue

import (
	"fmt"
	"sync"
)

type event struct {
	name   string
	object any
}

type IncomingEventsQueue struct {
	eventsMUX sync.Mutex
	events    []event
}

func NewIncomingEventsQueue() *IncomingEventsQueue {
	return &IncomingEventsQueue{
		events: make([]event, 0),
	}
}

func (q *IncomingEventsQueue) Enqueue(name string, object any) {
	q.eventsMUX.Lock()
	defer q.eventsMUX.Unlock()

	q.events = append(q.events, event{name: name, object: object})
	fmt.Printf("Event Added msg :: %s\n", object.(string))

}

func (q *IncomingEventsQueue) Dequeue() *event {
	q.eventsMUX.Lock()
	defer q.eventsMUX.Unlock()

	if len(q.events) == 0 {
		return nil
	}

	ev := q.events[0]
	q.events = q.events[1:]
	return &ev
}
