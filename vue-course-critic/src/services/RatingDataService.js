//use axios from HTTP client to send HTTP requests
import http from "../http-common";
class RatingDataService {
  getAll() {
    return http.get("http://localhost:8080/api/ratings");
  }
  createRating(data) {
    return http.post("http://localhost:8080/api/ratings", data);
  }
  // getAllCourseRating(courseID) {
  //   return http.get("http://localhost:8080/api/ratings/courseID/:${courseID}");
  // }
  // getAllCourseAvgRating(courseID) {
  //   return http.get("http://localhost:8080/api/ratings/avg/:${courseID}");
  // }
  getAllCourseAvgRating(id) {
    return http.get("http://localhost:8080/api/ratings/avg/" + id);
  }
  // getRatingByReview(reviewID){
  //   return http.get("http://localhost:8080/api/ratings/avg/:${reviewID}");
  // }

}
export default new RatingDataService();
