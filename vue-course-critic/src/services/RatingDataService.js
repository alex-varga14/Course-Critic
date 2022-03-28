//use axios from HTTP client to send HTTP requests
import http from "../http-common";
class RatingDataService {
  createRating(data) {
    return http.post("http://localhost:8080/api/ratings", data);
  }

  delete(id) {
    return http.delete("http://localhost:8080/api/ratings/courseID/" +id);
  }

  getAllCourseAvgRating(id) {
    return http.get("http://localhost:8080/api/ratings/avg/" + id);
  }
}
export default new RatingDataService();