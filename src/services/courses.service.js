import Api from "./Api";

const coursesService = {
    getAllCourses() {
        return Api.get(`courses`);
    },

    createCourse (data) {
        return Api.post(`/courses`, data);
    },

    getCoursesByClass() {
        return Api.get('/courses/getAllByClass');
    },

    fetchAllInfosOnCourse(idCourse) {
        return Api.get(`/courses/getAllInfos?courseId=${idCourse}`)
    }
}

export default coursesService;