test('test any in array', () => {
    let data = [1, 2];
    let matches = data
        .filter(s => s == 3)

    expect(matches.some(x => true)).toBe(false);
});