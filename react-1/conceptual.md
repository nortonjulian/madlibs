### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a front-end framework. It encapsulates logic and HTML into a class. It makes it easier to build modular applications.

- What is Babel?
    Babel is a tool that tarnspiles JSX into Javascript

- What is JSX?
    JSX is Javascript embedded in HTML

- How is a Component created in React?
    Component are created with UI and view logic.
- What are some difference between state and props?

- What does "downward data flow" refer to in React?
    A parent component defines a function
    The function is passed as a prop to a child component
    The child component invokes the prop
    The parent function is called, usually setting new state
    The parent component is re-rendered along with its children

- What is a controlled component?
    Controlled components handles the submission of the form and has access to the data the user entered. They maintain their own state and update it based on user input.

- What is an uncontrolled component?
   An uncontrolled component is when React is not in control of the form state.

- What is the purpose of the `key` prop when rendering a list of components?
    'key' props help identify which items have changed, were added , or removed.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index is a poor choice for a "key" prop when you know the array will not be static.

- Describe useEffect.  What use cases is it used for in React components?
    Comes with built in hooks for "side effects". Used for things like fetching data, starting a timer, and manually changing the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
It returns a mutable object with a key of current whose value is eqault to the one passed into the hook.

- When would you use a ref? When wouldn't you use one?
    A ref is used with timers like setInterval.

    A ref should not be used to expose DOM elements.

- What is a custom hook in React? When would you want to write one?
    A custom hooks is a Javascript function that typically uses built in hooks

    You would want to use a hooks when you have the same  logic inside of multiple components.
