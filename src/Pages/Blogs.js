import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-12'>
            <h1 className='text-center text-4xl font-bold my-6'>My Blogs</h1>
            <div className='border p-4 mb-4'>
                <h6 className='font-bold'>Question-1: How will you improve the
                    performance of a React Application?</h6>
                <p>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.</p>
                <p>Answer: 1.Keeping component state local where necessary. </p>
                <p>2. Memoizing React components to prevent unnecessary re-renders</p>
                <p>3. Code-splitting in React using dynamic import()</p>
                <p>4. Windowing or list virtualization in React</p>
                <p>5. Lazy loading images in React</p>
            </div>


            <div className='border p-4 mb-4'>
                <h6 className='font-bold'>Question-2:What are the different ways to manage a state in a React application?</h6>
                <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. </p>
                <p>The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of: </p>
                <p></p>
                <p>1. Hooks</p>
                <p>2. React Context API()</p>
                <p>4. Apollo Link State</p>

            </div>
            <div className='border p-4 mb-4'>
                <p className='font-bold'>Question-3:How does prototypical inheritance work? </p>
                <p>Answer: Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div className='border p-4 mb-4'>
                <p className='font-bold'>
                    Question-4: What is a unit test? Why should write unit tests?
                </p>
                <p>Answer:Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected </p>
                <br />
                <p>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>
                <br />
                <p>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                    It simplifies the debugging process.
                    Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</p>
            </div>
            <div className='border p-4 mb-4'>
                <p className='font-bold'>Question-5: Why you do not set the state directly in React?</p>
                <p>Answer: 
                    One should never update the state directly because of the following reasons:

                    <p>If you update it directly, calling the setState() afterward may just replace the update you made.</p>
                    <p>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</p>
                    <p>You will lose control of the state across all components.</p>
                </p>
            </div>
        </div>
    );
};

export default Blogs;