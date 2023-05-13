# Episode-4-Talk is Cheap Show Me Code-
## Theory

Qn1. Is JSX mandatory for React?

- Yes,We can use React without JSX.
- We can create React app using create-react-app.


Qn2. Is ES6 mandatory for React?

- Yes,it Is ES6 mandatory for React.
- To use react without ES6 ,install a  node module called create-react-class.


Qn3.. {TitleComponent} vs {<TitleComponent>} vs {<TitleComponent></TitleComponent>} in JSX

- {TitleComponent} is used when the TitleComponent is a react element and react element is after all a javascript variable so we can use it in our code like {TitleComponent}.
### const TitleComponent=(<h1 className='head'>Hi</h1>)
### const Head=()=>{return (<div>{TitleComponent}</div>)}

- {<TitleComponent>} is used when the TitleComponent is a react component so, we can use it in our code like {<TitleComponent>}.
- It is shorthand property of <TitleComponent></TitleComponent>.
- It is used when we don't want to include any child component within.
- React component starts with capital letter.

### const TitleComponent=()=>{return
 (<h1 className='head'>Hi</h1>)}
 
### const Head=()=>{return 
(<div><TitleComponent/></div>)}

- When we wan't to include any component within our React component, we don't use shorthand property.
- When we want to treat it as parent component and wrap child components within it.
### const TitleComponent=()=>{return 
(<h1 className='head'>Hi</h1>)}
### const Comp2=()=> {return
(<h2>Comp2</h2>)}
### const Head=()=>{return 
(<div>
<TitleComponent>
  Hello React <Comp2/>
</TitleComponent>
</div>)
}

Qn4. How can I write comments in React?

- We can write comments using {/* */} for multi-lineand {//} for single-line and wrap it around curly braces.
- ### <div>{/*Comments are written here.*/}</div>
- When JSX parser encounters the curly braces then it gets an idea that javascript is written within it.

Qn5. What is <React.Fragment></React.Fragment> and <></>?

- <> and </> is the shorthand for React.fragment.
- Instead of using multiple divs at root level, we can simply use Fragments which will not be added in the DOM and don't make our DOM tree ugly.
### <React.Fragment><div>Hello</div</React.Fragment>

Qn6. Virtual DOM?

- The virtual DOM provides a mechanism where the change is being done on the virtual DOM.
- Then, it compares the actual DOM and the virtual DOM and only updates the new changes in the actual DOM.
-  The advantages of Virtual DOM is to compute minimal DOM operations when re-rendering the UI. 

Qn7. Reconciliation in React?

- Reconciliation is the process by which React updates the UI to reflect changes in the component state.
- The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible.   
- React uses a virtual DOM (Document Object Model) to update the UI.
- Virtual DOM is synced with real DOM with ReactDOM library. This process is called Reconciliation.


Qn8. React Fibre?

- Fiber is the new reconciliation engine in React 16.
- Its main goal is to enable incremental rendering of the virtual DOM.
- React Fiber is a concept of ReactJS that is used to render a system faster and smoother.
-  ARCHITECTURE OF REACT FIBRE ---> 
- https://blog.bitsrc.ioreact-what-is-fiber-architecture-and-how-it-works-fab95622b0ba

Qn9. Why we need Keys in  React?

- Keys are needed in react so that it doesnot cause re-rendering of DOM again and again on every insert of any same level components.
- Adding a key will help React to only render the newly added component.
-  We can give unique ids to key property while using map function.
- Incase, no unique id present, we can give index as keys, which strats from 0 itself.
- However, we must avoid using indexes and key.

Qn10. Props in react?

- Props are used when we need to dynamically pass data to a component.
- Simply pass the data when we call the component and in the functional component use it as props.
### function Card(props){return <h1>{props.name}</h1>}

### <Card name="React"/>

Qn11. Config Driven UI?

- Config Driven UI is modification of the UI with rest to the data that we receive from the backend and not hard coding it.
- A onfig driven UI is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.
- Since, it's not posible to build different UI according to different data which can be location specific,etc so we change our UI on the basis of the config(Data) that we receive from the backend.
- Refer here --> https://desicoder.hashnode.dev/config-driven-ui
