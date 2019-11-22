import Api from "./Api";

const liveService = {
    createLive(nameCourse, description) {
        return Api.post("/api/live",{nameCourse: nameCourse, description: description})
   
    },

    startToRecord(session, name, properties) {
        return Api.post("/api/live/startRecording",{sessionId: session, sessionName: name, properties: properties})
    },

    stopRecording(recordId) {
        return Api.post("/api/live/stopRecording",{recordId: recordId})
    },

    get_tokenSession(sessionId) {
        return Api.get("/api/live/get-token/" + sessionId);
    },

    get_data(sessionId) {
        return Api.get("/api/live/data/" + sessionId);
    },

    saveLive(idsession,  namesession, descriptionlive, nameteacher, idcourselive) {
        return Api.post("/api/live/save",{idsession,  namesession, descriptionlive, nameteacher,idcourselive})
    },

    isActive(sessionId) {
        return Api.get("/api/live/isActive/" + sessionId);
    },

    getActiveLives() {
        return Api.get("/api/live/activelives/");
    },

}

export default liveService;