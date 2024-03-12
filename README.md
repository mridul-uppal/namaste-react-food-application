// const heading = React.createElement("h1", { key: "heading" }, "React!");

// const parent = React.createElement("div", { key: "parent" }, [
//   React.createElement("h2", { key: "heading1" }, "Sibling 1"),
//   React.createElement("h2", { key: "heading2" }, "Sibling 2"),
// ]);

// JSX - HTML like or XML like syntax -transpiled before it reaches the JS - PARCEL(manager) transpiles using Babel(worker)

// JSX =Babel transpiles to=> React.createElement => ReactElement - JS Object => HTMLElement(render)

// const jsxHeading = (
//   <h1 key="jsxHeading" className="heading">
//     Mridul Uppal
//   </h1>
// );

// React Component - Class based and Functional
// Function that returns React Element (JSX) is a component

// const ParaComponent1 = () => <h2 key="badshah">It's your boy Badshah</h2>;
// const ParaComponent2 = () => <h2 key="badshah">It's your boy Shaggy</h2>;

// Component Composition
// const HeadingComponent = () => {
//   return (
//     <>
//       {jsxHeading}
//       <h1 key="honey">Yo Yo Honey Singh</h1>
//       <ParaComponent1/>
//       {ParaComponent2()}
//     </>
//   );
// };

Optional Chaining

Two types of Import/Export
export default
named export

React Hooks
Normal JS utility functions
useState()
useEffect()
whenever a state variable updates, react rerenders the component

Reconciliation Algorithm (react fiber)- came in React 16 - finds difference between two virtual doms - compares two objects
Virtual Dom is representation of actual dom (normal js object)
Incremental rendering - the ability to split rendering work into chunks and spread it out over multiple frames.
React is fast because of Efficient DOM manipulation

Monolith - everything combined into one application (ui/api/db)
Microservice - seperate projects for UI/API/DB - seperation of concern - talk to each other based on use case

Shimmer UI - Fake UI showing loading