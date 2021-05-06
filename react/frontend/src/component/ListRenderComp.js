import React from 'react'
import ShowColorComp from './ShowColorsComp';
import ShowUserComp from './ShowUserComp';

const ListRenderComp = () => {
    // var colors = ['blue', 'black', 'white', 'red', 'orange', 'green'];
    // var myColors = colors.map((ele, ind) => (<div><h1>hello</h1> <h1>{ind + 1}. {ele}</h1></div>))
    // return (
    //     <div>
    //         {myColors}
    //     </div>
    // )

    var users = [
        {
            id: 1,
            name: 'Sakib',
            age: 12
        },
        {
            id: 2,
            name: 'Tamim',
            age: 13
        },
        {
            id: 3,
            name: 'Riyad',
            age: 13
        },
        {
            id: 4,
            name: 'Rakib',
            age: 14
        },
        {
            id: 5,
            name: 'Hasan',
            age: 15
        }
    ];
    var colors = ['blue', 'black', 'white', 'red', 'orange', 'green'];
    var names = ['Tamim', 'Sakib', 'Rakib', 'Hasan'];

    return (
        <div>
            <h1>All Users</h1>
            {
                users.map(ele => (
                    <ShowUserComp key={ele.id} user={ele} />
                ))
            }
            <br></br>
            <h1>All Colors</h1>
            {
                colors.map((ele, ind) => <ShowColorComp key={ind} ele={ele} ourClass={(ind%2 == 0)? 'container-black': 'container-blue'} />)
            }

            <br></br>
            <h1>All Names</h1>
            {
                names.map((ele, ind) => <ShowColorComp key={ind} ele={ele} ourClass={(ind % 2 == 0) ? 'container-black' : 'container-blue'} />)
            }
        </div>
    )
}

export default ListRenderComp;