'use strict';

const fs = require("fs");
const path = require("path");

async function executeTransaction({
    storage,
    modifyCandidate,
    validations = []
}) {
    let runningLocked = false;
    let candidateLocked = false;

    try {
        // Lock Running
        const runningLock = storage.lock("running");

        if (!runningLock.success) {
            return {
                success: false,
                status: 423,
                error: runningLock
            };
        }

        runningLocked = true;
        // Lock Candidate
        const candidateLock = storage.lock("candidate");

        if (!candidateLock.success) {
            storage.unlock("running");
            return {
                success: false,
                status: 423,
                error: candidateLock
            };
        }
        candidateLocked = true;

        // Clone Candidate from Running
        const runningCopy = storage.cloneDatastore("running");

        if (!runningCopy.success) {
            return runningCopy;
        }

        runningCopy.data.storage = "candidate";

        const overwriteResult =
            storage.overwriteDatastore(
                "candidate",
                runningCopy.data
            );
        if (!overwriteResult.success) {
            return overwriteResult;
        }

        // Get CandidateDS
        const candidateResult = storage.getDatastore("candidate");

        const candidateDS = candidateResult.data;
        // Apply Service Specific Changes
        const changeResult = await modifyCandidate(candidateDS);

        if (changeResult && changeResult.success === false) {
            return changeResult;
        }
        // Trigger Validations
        for (const validation of validations) {

            const result = await validation(candidateDS);
            if (!result.success) {
                return {
                    success: false,
                    status: 462,
                    error: result
                };
            }
        }

        // Overwrite Running from Candidate
        const candidateCopy = storage.cloneDatastore("candidate");

        if (!candidateCopy.success) {
            return candidateCopy;
        }

        candidateCopy.data.storage = "running";

        const commitResult = storage.overwriteDatastore("running", candidateCopy.data);

        if (!commitResult.success) {
            return commitResult;
        }

        return {
            success: true,
            status: 204
        };

    } finally {

        if (candidateLocked) {
            storage.unlock("candidate");
        }

        if (runningLocked) {
            storage.unlock("running");
        }
    }
}

module.exports = { executeTransaction };

