let timeoutId;
let _idleCallback = null;
const notIdleEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
const fiveMin = 5 * 60 * 1000;

const IdleService = {
    setIdleCallback(idleCallback) {
        _idleCallback = idleCallback;
    },
    /* Will be called when user interacts with the page */
    resetIdleTimer() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(_idleCallback, fiveMin);
    },
    /* register resetIdleTimer for every not idle events */
    registerIdleTimerResets() {
        notIdleEvents.forEach(event =>
            document.addEventListener(event, IdleService.resetIdleTimer, true)    
        );
    },
    /* remove any queue callbacks and events that will queue callback */
    unregisterIdleResets() {
        clearTimeout(timeoutId);
        notIdleEvents.forEach(event =>
            document.removeEventListener(event, IdleService.resetIdleTimer, true)
        );
    }
}

export default IdleService;