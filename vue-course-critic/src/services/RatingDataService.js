class RatingDataService {
  getAll() {
    return http.get("http://localhost:8080/api/ratings");
  }
  createRating(data) {
    return http.post("/rating", data);
  }
  getAllCourseRating(courseID) {
    return http.get("http://localhost:8080/api/ratings/courseID/:${courseID}");
  }
  getAllCourseAvgRating(courseID) {
    return http.get("http://localhost:8080/api//ratings/avg/:${courseID}");
  }
  getRatingByReview(reviewID){
    return http.get("http://localhost:8080/api//ratings/avg/:${reviewID}");
  }

}
export default new RatingDataService();
