import React from 'react'

 function FragmentComp() {
     var arr = [
         {name: "hello", id: "123"},
         {name: "hello 1", id: "124"},
         {name: "hello 2", id: "125"},
     ]
    return (
        <>
            <h1>hello h1</h1>
            <h2> hello h2</h2>
            {
                arr.map(ele=> (
                    <React.Fragment key={ele.id}>
                    <h1>{ele.name}</h1>
                    <h2>{ele.id}</h2>
                    </React.Fragment>
                ))
            }
        </>
    )
}

export default FragmentComp;