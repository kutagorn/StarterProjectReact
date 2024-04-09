/*export default function TabButton(props){
    using TabButton({children}) and using children below works too.
    I wrote it like this to see how does .children works with props. 
    This is called component composition

return(
    <li>
        <button>{props.children}</button>
    </li>
);

}
*/

export default function TabButton({ label, onSelect }) {

  return <button onClick={onSelect}>{label}</button>;
} 
/*
if you just put a label without string decoupling you need to use it like this.
export default function TabButton(props){
    
return(
    <li>
        <button>{props.label}</button>
    </li>
);

} */
