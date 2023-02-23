const TemplateExpressions = () => {

    const name = 'Wellerson'
    const data = {
        age: 26,
        job: 'Programmer',
    };
    return(

        <div>
            <h1>Olá {name}, Como você está?</h1>
            <h3>Vocẽ esta aprendendo React e tem {data.age} anos e {data.job}</h3>
        </div>
    );
}

    export default TemplateExpressions;