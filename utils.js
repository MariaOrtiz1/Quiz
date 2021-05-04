export function checkAsYes(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'y';
}

export function checkAsNo(userInput) {
    const firstLetter = userInput[0].toLowerCase();

    return firstLetter === 'n';
}