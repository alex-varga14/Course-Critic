//use axios from HTTP client to send HTTP requests
import http from "../http-common";
class AdminDataService {
    authenticate(username, password){
        return http.get("http://localhost:8080/api/admins/" +username +"/" +password);
    }
  }
  export default new AdminDataService();