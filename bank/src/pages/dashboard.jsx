import Account from "../components/account";

const Dashboard = ({ user, setUser }) => {
  // checking account, balance $1250.23, last transaction 1 June 2021
  // savings account, balance $103.98, last transaction 15 May 2021
  // savings account, balance $3908.43, last transaction 30 May 2021

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <h1>Dashboard</h1>
          <p>
            Welcome to your bank account. All your information is available
            here.
          </p>
        </div>
      </div>

      <div className="row">
        {/* displays the account row */}
        <div className="col-md-12 mb-2">
          <Account
            type="Checking"
            balance={1250.23}
            lastTransaction="1 June 2021"
          />
        </div>
        {/* displays the account row */}
        <div className="col-md-12 mb-2">
          <Account
            type="Savings"
            balance={103.98}
            lastTransaction="15 May 2021"
          />
        </div>
        {/* displays the account row */}
        <div className="col-md-12 mb-2">
          <Account
            type="Savings"
            balance={3908.43}
            lastTransaction="30 May 2021"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
