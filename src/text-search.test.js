import { find_jira } from './find-jira-codes';
const commits = require('./commits.json');

test('iterate and find text from commits.json', () => {

    let matches = find_jira(commits)

    expect(matches).toEqual([
        'ON-4123',
        'PDCN-1892',
        'PDCN-2079',
        'PDCN-2100',
        'TRD-8317'
    ]);
});

test('iterate and find text', () => {

    const data = [
        { message: "Merge branch 'main' into feat/jira-10-integration-tests" },
        { message: "jira-15: some changes" },
        { message: "JIRA-15: revert changes" },
        { message: "fix: another changes" },
        { message: "Jira-11: more changes" },
        { message: "Jira-20" },
        { message: "Merge pull request #13836 from warrenbrasil/fix/ON-4123#fix-customer-…" },
    ];
    let matches = data
        .map(s => s.message.match(/([A-Z0-9]+)-[0-9]+/gi))
        //remove null
        .filter(m => m)
        .flat()
        .map(m => m.toUpperCase())
        // distinct
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort()
        ;
    console.log(matches);
    expect(matches).toEqual([
        "JIRA-10",
        "JIRA-11",
        "JIRA-15",
        "JIRA-20",
        "ON-4123"
    ]);
});