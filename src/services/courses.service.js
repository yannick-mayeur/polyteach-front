import Api from "./Api";

const coursesService = {
    getAllCourses() {
        return Api.get(`courses`);
    },

    getCourse(courseID) {
        return Api.get(`courses/`+courseID);
    },

    createCourse (data) {
        return Api.post(`/courses`, data);
    },
}

export default coursesService;