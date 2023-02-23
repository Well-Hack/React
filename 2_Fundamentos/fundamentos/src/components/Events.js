const Events = () => {

    const HandleMyEvents = () => {
        
       console.log("Ativou o evento");
    };
    return(

       <div className='Clicou'>

        <div>
            <button onClick={HandleMyEvents}>Clique Aqui!</button>
        </div>

       </div> 


    )

}

    export default Events