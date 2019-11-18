React.js with Tyler Mcginnis
https://tylermcginnis.com/free-react-bootcamp/



What is React? 
  React is a library for building user interfaces. Thats all. 

What makes React special?
Composition 
Unidirectional Dataflow
Explicit Mutations 
Just JavaScript


Composition (components)
---------------------------
  <Slider/> <Navbar/> <Date/>
  <Router/> <Map/>  <Datepicker/>
  <Header /> <Calendar/> <Avatar/>
  <Carousel/><Chart/> <Icon/>
  
  How do you build a large app?
    By building a bunch of small apps. (Or components)

  
  <Container>
    <Navbar/>
    <Header/>
    <DatePicker>
      <Calendar/>
    </DatePicker>
  </Container>
  
  ^example of a UI



Unidirectional Data Flow
---------------------------
    jQuery
--------------

  Event Handler => Update DOM
  Event Handler => Update DOM
  Event Handler => Update DOM 
^ now frack it up with diagonal arrows. This changes that and that changes this and buggy caos ensues. 

 React 
------------       -------
Event Handler =>  | State |
Event Handler =>  | State |
Event Handler =>  | State |
                   -------

  
  With React you only need to think about two things:

1. State of your components.
2. How the UI looks based off of that state.

Your UI is just a function of your state. 
 


Explicit Mutations
------------------------
  -You have state inside of your application
  -You update that state and then react is resposible for updating the UI
  (state is just data inside of your application)


Hey React, here is the new state on this component.
      this.setState({
        handle: 'tylermcginnis',
        authed:true
      })

setState makes React say,te okay, looks like this is now the new sta of your application, so how will the UI change based off of this new state.



Just JavaScript

  import React from 'react'

  function FriendsList(){
    const friends = ['Jordan','Mikenzi','Jake']
    return (
    <ul>
    {friends.map((name)=> (
     <li>
      {name}
    </li>
    ))}
</ul>
)
  }



The state inside of twitter is going to be your tweets, the people you follow, the things you 'like'...



Building React element:
            
const headerElement = React.createElement(
    'h1',
  { id: 'header'},//any attributes we want to add on object representation of the DOM node were creating 
  
  'Tyler'
  
)  create an object representation of a DOM node.


would look like this ^   
  <h1 id="header">Tyler</h1>



//

 A React component is a function or a class which optionally accepts input and returns a React element. 

We can convert elements into components by wrapping them in a function


   function NameComponent(props){
      	return React.createElement(
          'h1',
        null,
        props.name,
      )
      
      }

or


      function NameComponent(props){
        return <h1>{props.name}</h1>
      }
//much better^^







Props
------

<NameComponent name={name}
               //^attribute in React land its called a prop.  its value is {name} and it's in {} because it's a variable, you defined earlier, with const name = "Thomas"

    //Now you can access name, inside NameComponent by using the <h1>{props.name}</h1>


Component 
---------
Returns an Element 











  
  
  
  
  
  
  
  