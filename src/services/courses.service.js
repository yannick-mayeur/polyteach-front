import Api from "./Api";

const coursesService = {
    getAllCourses() {
        return Api().get(`courses`)
    }
}

export default coursesService;