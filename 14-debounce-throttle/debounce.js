const initApp = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", debounce(clickLog, 2000));
};

const clickLog = () => console.log("clicked");


document.addEventListener("DOMContentLoaded", initApp);

const debounce = (callback, delay) => {
    let timeoutId = null;
    console.log(`timeout_id at immediate load ${timeoutId}`);
    return (...args) => {
        console.log(`previous timeout_id: ${timeoutId}`);
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};