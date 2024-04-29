export function removeHtmlTags(string) {
    return string.replace(/<[^>]*>?/gm, '');
}

export function getLocalStorage(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}

export function setLocalStorage(value, key) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}