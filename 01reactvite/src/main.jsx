import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'



// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: "Click me to visit google"
// } // this one doesnt execute because its syntax is not correct because the render does not accept this  type of structure

const anotherUser = "Aarushi Bamel Beautiful"

// react expected structure && we can npt write if else in these objects
const reactElement = React.createElement(
  'a', // tag
  {href: "https://google.com" , target: '_blank'}, // attributes

  // text
  'click me to visit google',
  anotherUser

)
// other method
const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <App/>
)
