import { createContext, useState } from "react"

const Stdlistcontext = createContext()

function Context(props) {
    const [stdlist,setstdlist] = useState(
        [
            {
                id:1,
                stdname:"Sankar",
                favourite:false
            },
            {
                id:2,
                stdname:"Mariappan",
                favourite:false
            },
            {
                id:3,
                stdname:"Roja",
                favourite:false
            },
            {
                id:4,
                stdname:"subha",
                favourite:false
            },
            {
                id:5,
                stdname:"karthi",
                favourite:false
            },
        ]
    )

    return(
        <>
            <Stdlistcontext.Provider value={{stdlist,setstdlist,}}>
                {props.children}
            </Stdlistcontext.Provider>
        </>
    )
}

export default Context
export {Stdlistcontext}
