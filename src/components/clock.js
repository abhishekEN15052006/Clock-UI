class Clock {
    constructor(element) {
        this.element = element;
        this.start();
    }

    start() {
        this.updateTime();
        setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        this.element.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

export default Clock;