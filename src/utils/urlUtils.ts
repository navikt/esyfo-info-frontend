export const loginUser = () => {
    if (typeof window === "undefined") return;

    window.location.href = `/syk/info/oauth2/login?redirect=${window.location.pathname}`;
};
