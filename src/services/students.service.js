import Api from "./Api";

const studentsService = {
    getAllStudents() {
        return Api().get(`students`)
    }
}

export default studentsService;