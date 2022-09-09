test('iterate and find text', () => {

    const data = [
        {message: "Merge branch 'main' into feat/jira-10-integration-tests"},
        {message: "jira-15: some changes"},
        {message: "JIRA-15: revert changes"},
        {message: "fix: another changes"},
        {message: "Jira-11: more changes"},
        {message: "Jira-20"},
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

    expect(matches).toEqual([
        "JIRA-10",
        "JIRA-11",
        "JIRA-15",
        "JIRA-20",
    ]);
});