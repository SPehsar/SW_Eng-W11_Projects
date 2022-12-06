// Dashboard
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Dashboard</h1>
        <h2>Widget</h2>
        <h2>Reviews</h2>
        <h2>Online Analysis</h2>
        <h2>Settings</h2>
      </div>
    </div>
  );
};

// Reviews
const Reviews = () => {
  return (
    <div className="reviews">
      <div>
        <h1>Reviews</h1>
        <h2>1,281</h2>
      </div>
    </div>
  );
};

// Average Rating
const AverageRating = () => {
  return (
    <div className="avgRating">
      <div>
        <h1>Average Rating</h1>
        <h2>4.6</h2>
      </div>
    </div>
  );
};

// Sentiment Analysis
const SentimentAnalysis = () => {
  return (
    <div className="sentAnalysis">
      <div>
        <h1>Sentiment Analysis</h1>
        <p>960</p>
        <p>122</p>
        <p>321</p>
      </div>
    </div>
  );
};

// Website visitors
const WebsiteVisitors = () => {
  return (
    <div className="webVisitors">
      <div>
        <h1>Website Visitors</h1>
        <h2>821</h2>
        <div className="webVisitorsRectangle">
          <h4>This is a place holder that expands as needed. This is a place holder that expands as needed. This is a place holder that expands as needed.</h4>
        </div>
      </div>
    </div>

  );
};

//App
class DashboardView extends React.Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    );
  }
}

ReactDOM.render(<DashboardView />, document.querySelector("main"));
