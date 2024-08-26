import React from 'react'

export const Header = () => {
    let customColor = "code";


    const loggedin = true;
    const greet = loggedin ? <p>Welcome Back</p> : <p>Please Log In</p>

    const items = ["item1", "item2", "item3"];


  return (
    <>
        <h1 className='heading'>Suhaina Fathima M</h1>
        <p className='para'>Software Engineer</p>


        {/* JavaScript Expression in JSX */}

        <p className={customColor} style={{fontSize:'25px', fontStyle:"italic"}}> 25+20={25+20} </p>


        {/* Conditional Rendering */}

        {greet}



        {/* JSX in Lists */}
        <ul>
            {items.map((item, index) => ( 
                <li key={index}>{item}</li>
            ))}
        </ul>

    </>
  )
}
