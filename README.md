## 🔷 What is JSX, and why is it used?

**JSX** is a syntax extension for JavaScript used with React to describe what the UI should look like. It resembles HTML but carries the full power of JavaScript.

```jsx
const element = <h1 class="greeting">Hello, world!</h1>;
```

### Key Rules

| Rule                | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| **Single Root**     | A component must return one top-level element (or a `<>...</>` Fragment) |
| **Close All Tags**  | Unlike HTML, tags like `<img>` must be self-closing: `<img />`           |
| **camelCase Props** | `class` → `className`, `onclick` → `onClick`                             |

---

## 🔁 What is the difference between State and Props?

### Props

Data **passed into** a component from its parent — used for configuration or data flow.

```jsx
// Parent passes 'status' as a prop
<StatusBadge status="Open" />
```

> 💡 _Analogy: A "New Ticket" button might receive its label or background gradient via props so it can be reused elsewhere._

### State

Data **managed locally** within a component — tracks changes, inputs, or UI logic.

```jsx
const [count, setCount] = useState(0); // 'count' is internal state
```

> 💡 _Analogy: A "Payment Failed" card might use state to track if the "Complete" button has been clicked or if the error message should be hidden._

---

## 🪝 What is the useState hook, and how does it work?

`useState` is a built-in React hook that allows functional components to have **internal memory**. Before hooks, only class components could hold state.

### How It Works

When you call `useState`, it returns an array of **two values**:

1. **The current state value** — the data you want to store
2. **A setter function** — updates the value and triggers a re-render

```jsx
const [count, setCount] = useState(0);
// count     → current value (starts at 0)
// setCount  → function to change it
```

### Practical Example

```jsx
function TicketManager() {
  // 1. Initialize state
  const [ticketCount, setTicketCount] = useState(0);

  return (
    <div>
      <p>Total Tickets: {ticketCount}</p>

      {/* 2. Update state on click */}
      <button
        className="btn btn-primary"
        onClick={() => setTicketCount(ticketCount + 1)}
      >
        + New Ticket
      </button>
    </div>
  );
}
```

---

## 🔗 How can you share state between components in React?

React follows **unidirectional data flow** — data moves top to bottom. Here are the three primary approaches:

| Strategy                   | Best For                                   | How                                     |
| -------------------------- | ------------------------------------------ | --------------------------------------- |
| **Lifting State Up**       | Parent ↔ Child or Sibling ↔ Sibling        | Move state to the nearest common parent |
| **React Context API**      | Deeply nested components / global settings | `createContext` + `useContext`          |
| **Global State Libraries** | Large, data-heavy applications             | Redux, Zustand, Jotai, etc.             |

---

## 🖱️ How is event handling done in React?

React event handling is similar to DOM events, with key syntactic differences.

### 1. Syntactic Differences

```html
<!-- HTML -->
<button onclick="activateLasers()">Fire</button>
```

```jsx
{
  /* React */
}
<button onClick={activateLasers}>Fire</button>;
```

> Events use **camelCase** and accept a **function reference**, not a string.

---

### 2. Passing Arguments

Wrap in an arrow function to delay execution — otherwise it runs immediately on render.

```jsx
// ✅ Correct: arrow function delays execution
<button onClick={() => handleTaskStatus("Open")}>Update Status</button>
```

---

### 3. Preventing Default Behavior

You **cannot** use `return false` in React. Call `e.preventDefault()` explicitly.

```jsx
function Form() {
  function handleSubmit(e) {
    e.preventDefault(); // Explicitly stops the page reload
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

### 4. Synthetic Events

React wraps native browser events into a **`SyntheticEvent`** object — ensuring identical behavior across all browsers. No cross-browser compatibility worries needed.

---

### 5. Practical Example — The "New Ticket" Button

```jsx
function TicketApp() {
  const [status, setStatus] = useState("Closed");

  const handleCreateTicket = () => {
    setStatus("Open");
  };

  return (
    <div className="p-8">
      {/* 1. The Trigger */}
      <button
        className="btn bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white"
        onClick={handleCreateTicket}
      >
        + New Ticket
      </button>

      {/* 2. The Result */}
      <div className="mt-4">
        <span>Current Status: {status}</span>
      </div>
    </div>
  );
}
```
