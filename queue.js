class Queue {
    constructor(){
        this._arr = [];
        this._cnt = 0;
    }

    inVal(val) {
        this._arr.push(val);
        this._cnt++;
    }

    outVal() {
        if(!this._cnt){
            console.log('empty!');
            return ;
        }
        this._arr.shift();
        
    }
}

let tempQ = new Queue();
tempQ.outVal();
tempQ.outVal();
tempQ.inVal(3);
tempQ.outVal();
