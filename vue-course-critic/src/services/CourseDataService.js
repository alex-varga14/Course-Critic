//use axios from HTTP client to send HTTP requests
import http from "../http-common";
class CourseDataService {
  getAll() {
    return http.get("http://localhost:8080/api/courses");
  }
  getSuggested() {
    return http.get("http://localhost:8080/api/courses/suggested/1");
  }
  approveSuggested(id) {
    return http.put('http://localhost:8080/api/courses/suggested/'+id, false);
  }
  getCourseAggregateInfo(){
    return http.get("http://localhost:8080/api/courses/get/all/aggregates");
  }
  // get(data) {
  //   return http.get("http://localhost:8080/api/courses/"+ data);
  // }
  get(id) {
    return http.get("http://localhost:8080/api/courses/" + id);
  }
  create(data) {
    return http.post("/courses", data);
  }
  update(id, data) {
    return http.put(`/courses/${id}`, data);
  }
  delete(id) {
    return http.delete(`/courses/${id}`);
  }
  deleteAll() {
    return http.delete(`/courses`);
  }
  findByTitle(title) {
    return http.get(`/courses?title=${title}`);
  }
}
export default new CourseDataService();
