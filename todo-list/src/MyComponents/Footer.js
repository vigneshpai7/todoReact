import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:'relative',
        top:'100vh',
        width:"100%"
    }
    return (
        <footer  className=" page-footer bg-dark  text-light py-3 my-3" style={footerstyle} >
       
           <p className="text-center"> Copyright @copy Vignesh</p>
        
        </footer>
    )
}
