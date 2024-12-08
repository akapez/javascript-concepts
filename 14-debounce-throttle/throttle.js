const initApp = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", throttle(clickLog, 2000));
};

const clickLog = () => console.log("clicked");


document.addEventListener("DOMContentLoaded", initApp);

const throttle = (callback, delay) => {
    let lastTime = 0;
    console.log("called Throttle immediately");
    id = 0;
    return (...args) => {
        const now = new Date().getTime();
        id++;
        if (now - lastTime < delay) return;
        lastTime = now;
        console.log(`event id: ${id}`);
        callback(...args);
    };
};