import Api from "./Api";

const liveService = {
    createLive(nameCourse, description) {
        return Api().post("/api/live",{nameCourse: nameCourse, description: description})
   
    },

    startToRecord(session, name, properties) {
        return Api().post("/api/live/startRecording",{sessionId: session, sessionName: name, properties: properties})
    }
}

export default liveService;