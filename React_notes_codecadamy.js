
codecadamy
// React.js
// ---------------
  
  
  
//   React is modular. Instead of writing large,dense files of code, you can write many smaller, reusable files. React's modularity can be a beautiful solution to JavaScripts maintainability problems. 

//   React is scalable. Large programs that display a lot of changing data are where React performs best. 
//   React is flexible. You can use React for interesting projects that have nothign to do with making a web app. People are still figuring out Reacts potential. Theres room to explore. 
  
//   React is popular. While this reason has admittedly little to do with Reacts quality, the trush is that understanding React will make you more employable. 
  
  

  
 
  
//  Intro to JSX

// Hello World

// Take a look at the following line of code:
      
    const h1 = <h1>Hello world</h1>;


What kind of weird hybrid code is that? Is it JavaScript? HTML? Or something else?
  
  It seems like it must be JavaScript, since it starts with const and ends with ;. If you tried to run that in an HTML file, it wouldnt work. 

  However, the code also contains <h1>Hello world</h1>, which looks exactly like HTML. That part wouldnt work if you tried to run it in a JavaScript file. 

  Whats going on?
  
  The Mystery, Revealed

  Good! Take another look at the line of code that you wrote. Does this code belong in a JavaScript file, an HTML file, or somewhere else?
  The answer is...a JavaScript file! Despite what is looks like, your code doesnt actually contain any HTML at all. 
  That part that looks like HTML, <h1>Hello world</h1>, is something called JSX
  
  
  What is JSX? 
  JSX is a synax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
  What does 'syntax extension' mean?
  In this case, it means that JSX is not valid JavaScript. Web browsers cant read it!
  If a JavaScript file contains JSX code, then that file willl have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript. 
  Codecademys server already have a JSX compiler installed, so you dont have to worry about that for now. Eventually well walk through how to set up a JSX compiler on your personal computer. 


JSX Elements 
-------------
  A basic unit of JSX is called a JSX element:
      
    Heres an example of a JSX element:
    
          <h1>Hello world</h1>

  This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file. 
  
    In app.js, write a JSX <p></p> element containing  the text, Hellow world. Use the example code above as a guide. 
  
  
  
  JSX Elements And Their Surroundings
  --------------------------------------
    JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. 
    That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array..you name it. 
    Heres an example of a JSX element being saved in a variable. 
    
      const navBar = <nav>I am a nav bar</nav>

    Heres an example of several JSX elements being stored in an object:

  const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };



    ~Create a JSX <article></article> element. Save it in a variable named myArticle. 

    const myArticle = <article></article>
    

  
  
  
  Attibutes In JSX
  ------------------
  
    -JSX elements can have attributes, just like HTML elements can. 
    
    -A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:
    
    
            my-attribute-name="my-attribute-value"
    
 
Here are some JSX elements with attributes:
  
    <a href="http://www.example.com">Welcome to the Web</a>;

    const title = <h1 id="title">Introduction to React.js: Part 1</h1>;
    
    A single JSX element can have many attributes, just like in HTML:
      
        const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />
          
          ~Decalte a constant named p1. 
            Set p1 equal to a JSX <p></p> element. Write the word foo in between the <p></p> tags. 
          
          const p1 = <p>foo</p>;
    
          ~On the next line, declare a constant named p2.
            Set p2 equal to another JSX <p></p> element. Write the word bar in between the <p></p> tags.
          
          const p2 = <p>bar</p>;
  

          ~Give the first <p></p> an id attribute of "large". 
          Give the second <p></p> an id attribute of 'small'.


      const p1 = <p id="large">foo</p>
      const p2 = <p id="small">bar</p>


            
            
    Nested JSX
    -------------
     You can nest JSX elements inside other JSX elements, just like in HTML
     Heres an example of a JSX <h1>element, nested inside of a JSX <a> element:
     
        <a href="https://www.example.com"><h1>Click me!</h1></a>;
        
        To make this more readable, you can use HTML-style line breaks and indentation:

      <a href="https://www.example.com">
        <h1>
            Click me!
        </h1>
       </a>
 
            
       If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parenteses. This looks strange at first, but you get used to it. 
       
       
       (
       <a href="https://www.example.com">
        <h1>
         Click me!
         </h1>
       </a>  
       )
       
       

      Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can! Heres an example of a nested JSX expression being saved as a variable. 
       
    const theExample = (
      <a 
    href='https://www.example.com'>
        <h1>
          Click me!
        </h1>
      </a>
    );   
       
       
        ~Declare a new variable named myDiv. Set myDiv equal to a JSX <div></div> element. 

    const myDiv = <div></div>;
       
       ~Wrap the <div></div> in parentheses, and use indentation and line breaks like in the examples. In between the <div></div> tags, nest an <h1></h1> containing the text Hello world.

    const myDiv = (
            
      <div>
        <h1>Hello world</h1>
      </div>
    
    )
       
       
       
       
       
       
       
       
       
       
       
       
       
            
            
            
            
            
            
            
            