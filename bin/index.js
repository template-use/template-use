#!/usr/bin/env node
const degit = require("degit");
const colors = require("colors");
const fetchRepo = require("../templates.js");

const [, , templateName] = process.argv;

if (!templateName) {
    console.log("[usetemplate] No template name was provided.".red);
    process.exit(1);
}

(async () => {
    try {
        const repoUrl = await fetchRepo(templateName);
        if (!repoUrl) {
            console.error(`[usetemplate] Template \`${templateName}\` not found.`.red);
            process.exit(1);
        }

        console.log(`[usetemplate] Cloning template: \`${templateName}\` ...`.cyan);
        await degit(repoUrl).clone(templateName);

        console.log(`[usetemplate] Template \`${templateName}\` cloned successfully.`.green);
        process.exit();
    } catch (error) {
        console.log("[usetemplate] Error while cloning template:".red, error);
    }
})();
