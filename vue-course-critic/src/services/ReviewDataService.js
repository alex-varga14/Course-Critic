import http from "../http-common";
class ReviewDataService {
  create(data) {
    return http.post("http://localhost:8080/api/reviews", data);
  }

  delete(id) {
    return http.delete("http://localhost:8080/api/reviews/courseID/" +id);
  }

  getCourseReviewsWRatings(id) {
    return http.get("http://localhost:8080/api/reviews/ratings/" + id);
  }

  updateHelpful(id, data) {
    return http.put("http://localhost:8080/api/reviews/" + id + "/" + data);
  }

  getLastReviewID() {
    return http.get("http://localhost:8080/api/reviews/get/lastID");
  }
}
export default new ReviewDataService();