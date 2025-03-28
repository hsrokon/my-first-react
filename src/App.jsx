import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import Phones from './Phones'
import Info from './Info'
import GroceryStore from './Grocery'

function App() {
  const phoneArray = ['Pixel', 'Iphone', 'Samsung', "Mi", "Symphony", "RealMe"];
  const info = [
    {id:1, name: "Assim Al Hakim", age: 65},
    {id:2, name: "Muhammad Ali", age: 28},
    {id:3, name: "Umar Sulaeman", age: 40},
  ]

  const store = [
    {name: "Bread", price: 50},
    {name: "Pen", price: 10},
    {name: "Chips", price: 20},
    {name: "Drinks", price: 40}
  ]

  return (
    <>
      <h2>Vite + React</h2>
      {
        info.map(inf => <Info iObj={inf}></Info>)
      }

      <GroceryStore store={store}></GroceryStore>

      {/* <Phones name={phoneArray[0]}></Phones> */}
      {/* {
        phoneArray.map(phn => <Phones name={phn}></Phones>)
      } */}

      {/* <Todo name="React" isDone={true}></Todo>
      <Todo name="Core concepts" isDone={false}></Todo>
      <Todo name="JSX" isDone={true}></Todo> */}

      {/* <Device name="PC" price="1 lakh"></Device>
      <Device name="Mobile" price="45k"></Device>
      <Device name="Calculator" price="600tk"></Device>
      <Car model="R34" hp="1000"></Car>
      <Car model="R35" ></Car>
      <Car model="Viper" hp="3200"></Car>
      <Person></Person>
      <Student></Student> */}
    </>
  )
}

function Device(props) {
  return <h3>This is a : {props.name}, it's price : {props.price}</h3>
}

function Car({model, hp=900}) {
  return <h3>This is {model}. HP {hp}</h3>
}

function Person() {
  const name = 'Abdullah';
  const info = {place : 'Palestine', age: 25 }
  return <h3>I'm a person, my name is {name}. I live in {info.place}, my age is {info.age}.</h3>
}

function Student() {
  return (
    <div>
      <h2>This is a student's info:</h2>
      <p>Name : Abdur Rahman</p>
      <p>Age : 43</p>
    </div>
  )
}

export default App
