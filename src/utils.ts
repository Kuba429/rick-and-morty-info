export const debounce = (callback: Function, delay: number = 300) => {
    let timeout: number | undefined;

    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    };
};
