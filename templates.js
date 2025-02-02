const templates = {
    "express-ts": "github:template-use/express-ts",
    "express-ts-mongoose": "github:template-use/express-ts-mongoose"
};

function fetchRepo(tempname) {
    return Promise.resolve(templates[tempname] || null);
}

module.exports = fetchRepo;
