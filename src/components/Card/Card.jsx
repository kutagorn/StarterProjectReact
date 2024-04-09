/*This was a coding question.*/
export default function Card({name, children}){
    return( 
        <ul>
        <h2>{name}</h2>
        <p>{children}</p>
        </ul>
        );
}
