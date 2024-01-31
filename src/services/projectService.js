import http from "./httpService"

export function getOwnerProjectsApi() {
    return http.get("/project/owner-projects").then(({ data }) => data.data)
}

export function removeProjectsApi(id) {
    return http.delete(`/project/${id}`).then(({ data }) => data.data)
}

export function createProjectApi(data) {
    return http.post(`/project/add`, data).then(({ data }) => data.data)
}