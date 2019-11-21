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

    deleteCourse(courseID) {
        return Api.delete(`courses/`+courseID);
    },
    bookmarkCourse(course) {
        return Api.put('/course/bookmark', {course})
    },

    unbookmarkCourse(course) {
        return Api.put('/course/unbookmark', {course})
    },
    
    rateCourse(course, rate) {
        return Api.post('/course/rateCourse', {course, rate});
    },

    updateRateCourse(course, rate) {
        return Api.put('/course/rateCourse', {course, rate});
    }
}

export default coursesService;