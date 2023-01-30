## Conceptual Exercise

### Answer the following questions below:

- What is React? When and why would you use it?

  React is an open-source front-end Javascript library that is used for building user interfaces specifically for signle-page applications. It also allows you to create reusable UI components.

- What is Babel?

  Babel is a toolchain that is mainly used to convert ES2015, or newer, code into a backwards compatible version of Javascript in current and older browsers or environments.

- What is JSX?

  JSX, or Javacript XML, is a syntax extension of Javascript. It allows you to directly write HTML in React (within Javascript code).

- How is a Component created in React?

  A component in React is created by creating a new .js file (usually named the same as the component). Importing React into that file. Then writing the component as a function and returning the HTML of the component from that function, and finally exporting that function.

- What are some difference between state and props?

  State is used in a component to grab a piece of data and make it persist through re-renders until you call it's `set` function and change it or leave the page. Props are pieces of data passed down from a parent component and they cannot be changed.

- What does "downward data flow" refer to in React?

  Downward data flow refers to how data is dispersed through components. You can use props to send pieces of data down to child components but child components cannot send data back up to parent components.

- What is a controlled component?

  A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state. In a controlled component, the form element's data is handled by the React component, not the DOM.

- What is an uncontrolled component?

  An uncrontrolled component is a component where the form element's data is handled by the DOM. To access the input's DOM node and extract its value you can use a ref.

- What is the purpose of the `key` prop when rendering a list of components?

  The `key` prop is used on a component to help react keep contol over component instances.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

  It is a poor choice to use an array index for a `key` prop because array indexes can change and then React won't be able to properly differentiate which component is which.

- Describe useEffect. What use cases is it used for in React components?

  The useEffect hook lets you perform side effects in a function component. You can use it to control whether a piece of a component updates.

- What does useRef do? Does a change to a ref value cause a rerender of a component?

  The useRef hook lets you select a piece of your component similar to controlling it's DOM element. An element selected with useRef has the `.current` property which accesses the current value of the element. Updating a reference doesn't trigger a re-render. UseRef also can store a value and update that value without triggering a re-render.

- When would you use a ref? When wouldn't you use one?

  You would use a ref when you need to monitor and update a value without re-rendering the component. You would also use a ref to access DOM elements inside of a component.

- What is a custom hook in React? When would you want to write one?

  A custom hook allows you to extract some components logic into a reusabe function. You can write one whenever you have similar logic in multiple components that you'd want to reuse.
