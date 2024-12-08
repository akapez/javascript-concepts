### JavaScript Debouncing and Throttling

Debouncing and throttling are techniques used to control how often a function is executed, especially in scenarios where a function is called repeatedly in quick succession. These techniques are commonly used to improve performance and user experience in web applications.

#### Debouncing

Debouncing ensures that a function is only executed once after a certain amount of time has passed since it was last called. If the function is called again before the specified time has passed, the previous call is cancelled, and the timer starts over.

##### Use Case

Debouncing is useful for events that fire multiple times in quick succession but where only the final event needs to trigger the action. Examples include:

- Typing in a search input field and fetching suggestions from a server.
- Window resizing events.

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage
const searchInput = document.getElementById("search");
const handleSearch = debounce(() => {
  console.log("Fetching search results...");
}, 300);

searchInput.addEventListener("input", handleSearch);
```

In this example, `handleSearch` will only be executed 300 milliseconds after the user has stopped typing in the search input field.

#### Throttling

Throttling ensures that a function is executed at most once in a specified time interval, regardless of how many times it is called. This means that the function will be called at regular intervals.

##### Use Case

Throttling is useful for events that fire continuously and need to be handled at regular intervals. Examples include:

- Scrolling events.
- Window resizing events.

```javascript
function throttle(func, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Usage
const handleScroll = throttle(() => {
  console.log("Handling scroll event...");
}, 200);

window.addEventListener("scroll", handleScroll);
```

In this example, `handleScroll` will be executed at most once every 200 milliseconds, regardless of how often the scroll event is fired.

#### Differences Between Debouncing and Throttling

- Debouncing:
  - Ensures the function is called only once after a specified delay.
  - Useful for actions that should only happen once the user has stopped performing an action (e.g., typing).
- Throttling:
  - Ensures the function is called at regular intervals.
  - Useful for actions that need to happen continuously but at a controlled rate (e.g., updating a scroll position).

Further Reference: [Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/), [debounce](https://www.joshwcomeau.com/snippets/javascript/debounce/)
