import React, { useState } from "react";
import NewReviewForm from "./components/NewReviewForm";
import ReviewList from "./components/ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);
  const handleSend = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Add a review for my husband's jokes</h1>
        <NewReviewForm onSend={handleSend} />
        <ReviewList reviews={reviews} />
      </header>
    </div>
  );
}

export default App;
