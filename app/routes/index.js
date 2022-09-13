import searchGithubApi from "./search";

const api = (app) => {
    app.use('/github', searchGithubApi);
}

module.exports = api;