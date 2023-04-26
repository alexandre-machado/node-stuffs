const commits = require('./commits.json');

export function find_jira(commits) {

    let matches = commits
        .map(s => s.commit.message.match(/([a-zA-Z][a-zA-Z0-9]*)-[0-9]+/gi))
        //remove null
        .filter(m => m)
        .flat()
        .map(m => m.toUpperCase())
        // distinct
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort()
        ;
        
    console.log(matches);
    console.log(commits.length);
    console.log(commits.map(s => s.commit.message))
    return matches;
}