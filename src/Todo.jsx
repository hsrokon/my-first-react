// export default function Todo({name}) {
//     return <li>Learn : {name}</li>
// }


//Conditional rendering option 1
// export default function Todo({name, isDone}) {
//         if (isDone) {
//             return <li> Great work of finishing {name}</li>
//         } else {
//             return <li>Try {name}</li>
//         }
// }

//Conditional rendering option 2
// export default function Todo({name, isDone}) {
//         if (isDone) {
//             return <li>Great great work of finishing {name}</li>
//         }
//         return <li>Try again {name} mate</li>
//     }

//Conditional rendering option 3 : Ternary operator
// export default function Todo({name, isDone}) {
//     return <li>{isDone ? "Finished" : "Work on"} : {name}</li>
// }

//Conditional rendering option 4 : &&
// export default function Todo({name, isDone}) {
//     return <li>{name} {isDone && ": Done"}</li>
// }

//Conditional rendering option 5 : ||
// export default function Todo({name, isDone}) {
//     return <li>{name} {isDone || ": Try again mate"}</li>
// }

//Conditional rendering option 6
export default function Todo({name, isDone}) {
    let task;
    if (isDone) {
        return task = <li> {name} : Done </li>;
    }
    return task = <li>Work more on : {name}</li>
}