const ReviewList = ({ reviews }) => {
  return (
    <>
      <h1>This is the list of Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </>
  );
};

export default ReviewList;
