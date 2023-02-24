const Events = () => {

    const HandleMyEvents = () => {
        
       console.log("Ativou o evento");
    };

    const renderSomenthing = (x) => {

        if (x){

            return <h1>Renderizando isso!</h1>

        }
        else{

            return <h1> Renderizando 2</h1>
        }




    };

    return(

       <div className='Clicou'>

        <div>
            <button onClick={HandleMyEvents}>Clique Aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log('Clicou')}>Clique aqui também</button>
        </div>
        {renderSomenthing(true)}
        {renderSomenthing(false)}
       </div> 


    )

}

    export default Events