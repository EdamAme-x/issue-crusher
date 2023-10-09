const { Octokit } = require("@octokit/rest");
const dotEnv = require('dotenv').config();
const octokit = new Octokit({ auth: dotEnv.parsed.ACCESS_TOKEN });

// issue連立

setInterval(() => {
    octokit.issues.create({
        owner: 'username here!',
        repo: 'repo name here!',
        title: "title here!",
        body: "body here!",
    }).then(({ data }) => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });

}, 500);