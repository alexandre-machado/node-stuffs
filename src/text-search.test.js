test('iterate and find text', () => {

    const data = [
        {message: "Merge branch 'main' into feat/jira-10-integration-tests"},
        {message: "jira-15: some changes"},
        {message: "fix: another changes"}
    ];
    let matches = data
        .map(s => s.message.match(/([A-Z0-9]+)-[0-9]+/gi))
        .filter(m => m)
        .flat()
        .map(m => m.toUpperCase());

    expect(matches).toEqual([
        "JIRA-10",
        "JIRA-15"
    ]);
});