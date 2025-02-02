const templates = {
    "express-ts": "github:template-use/express-ts"
};

function fetchRepo(tempname) {
    return Promise.resolve(templates[tempname] || null);
}

module.exports = fetchRepo;
