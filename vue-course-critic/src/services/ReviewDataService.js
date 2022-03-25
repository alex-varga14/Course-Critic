import http from "../http-common";
class ReviewDataService {
  getAll() {
    return http.get("http://localhost:8080/api/reviews");
  }
  create(data) {
    return http.post("http://localhost:8080/api/reviews", data);
  }
  getCourseReviews(id){
    return http.get("http://localhost:8080/api/reviews/courseID/" + id);
  }
  delete(id) {
    return http.delete("http://localhost:8080/api/reviews/courseID/" +id);
  }
}
export default new ReviewDataService();
