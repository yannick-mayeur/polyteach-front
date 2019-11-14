import Api from "./Api";

const liveService = {
    createLive(nameCourse, description) {
        return Api().post("/api/live",{nameCourse: nameCourse, description: description})
   
    }
}

export default liveService;