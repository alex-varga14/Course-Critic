import http from "../http-common";
class ReviewDataService {
  getAll() {
    return http.get("http://localhost:8080/api/reviews");
  }
  create(data) {
    return http.post("/review", data);
  }
  
}
export default new ReviewDataService();
