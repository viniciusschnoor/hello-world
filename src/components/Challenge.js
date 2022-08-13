const Challenge = () => {

    const a = 2;
    const b = 3;

    const handleSomar = () => {
        console.log(a + b)
    };

    return(
        <div>
            <button onClick={handleSomar}>SOMAR!</button>
        </div>
    );
};

export default Challenge