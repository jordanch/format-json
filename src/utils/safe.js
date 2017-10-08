export function safe(fn, fallback) {
    try {
        return fn();
    } catch (e) {
        return fallback;
    }
}