//redability only of a property

(() => {
    class Message {
        public readonly title: string;
        message: string;
        isSent: boolean;
    
        constructor(id: string) {
            this.id = id;
        }
    }
})()