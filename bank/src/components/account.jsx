const Account = ({ type, balance, lastTransaction }) => {
    // a card that displays the account type, balance, and last transaction


    // this converts the balance into a comma format
    // e.g. 1000000 becomes 1,000,000
    const convertCurrencyIntoCommaFormat = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{type}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Balance: ${convertCurrencyIntoCommaFormat(balance)}</h6>
                <p className="card-text">Last Transaction: {lastTransaction}</p>
            </div>
        </div>
    );
}

export default Account;