export function toCapitalizedWords(name: string): string {
    const words = name.match(/[A-Za-z][a-z]*/g) || [];
    return words.map(capitalize).join(' ');
}

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

export function getErrorMessage(error: unknown) {
    if (error instanceof Error) {
        return error.message;
    }
    return String(error);
}
