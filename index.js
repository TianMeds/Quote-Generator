function App() {

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote ] =  React.useState([]);

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes");
            const data =await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote  = () => {
        let randIndex = Math.floor(Math.random() * quotes.length)
            setRandomQuote(quotes[randIndex])
    }
  return (
    <div style={{backgroundColor: "#0dcaf0", minHeight: "100vh"}}>
    <div className="container pt-5 d-flex align-items-center d-flex justify-content-center">
        <div className="jumbotron">
            <div className="card">
                <div className="card-header">Quotes</div>
                <div className="card-body">
                    {randomQuote ? (
                        <>
                        <h5 className="card-title">- {randomQuote.author || "No Author"}</h5>
                        <p className="card-text"><q>{randomQuote.text}</q></p>
                        </>
                    ): (
                        <h2>Loading</h2>
                    )}

                    <div className="">
                        <button className="btn btn-primary mb-3"onClick={getNewQuote}>New Quote</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}


ReactDOM.render(<App/>, document.getElementById('app'))