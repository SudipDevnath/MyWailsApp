export namespace incomingEventsQueue {
	
	export class event {
	
	
	    static createFrom(source: any = {}) {
	        return new event(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	
	    }
	}

}

