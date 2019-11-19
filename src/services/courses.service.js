import Api from "./Api";

const coursesService = {
    getAllCourses() {
        return Api.get(`courses`);
    },

    createCourse (data) {
        return Api.post(`/courses`, data);
    },
}

export default coursesService;