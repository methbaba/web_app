

function Card(props){


    if(props.isLogged){
         return (
        <card>
            <div className="card"> 
            <h1 >hello</h1>
            <p > {props.name} is {props.age } years of age </p>
            <p > can play football : {props.isMale ? "yes" : "no"}  </p>
            </div>
            
        </card>

    );
}
    return (
        <>
        <h1 className="failMsg">you have not logged in please log in </h1>
        </>
    );

   


}

export default Card;