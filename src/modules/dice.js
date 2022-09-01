function rollDice(number, value, modifier) {
    const DICE_SIDES = [4, 6, 8, 10, 12, 20, 100]

    if (number >= 10) {
        return "Tried to roll too many dice"
    }
    if (!DICE_SIDES.includes(value)) {
        return "Invalid input"
    }

    let rolls = [];
    for (let i = 0; i < number; i ++) {
        const rollValue = Math.floor(Math.random() * value) + 1 + modifier;
        if (rollValue == NaN) {
            return "Invalid input"
        }
        rolls.push(rollValue);
    }
    return rolls;
}

module.exports = {rollDice};