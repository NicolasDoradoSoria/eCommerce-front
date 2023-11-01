export const loginService = async (data) => {
    const { email, password } = data
    if (email === "nicoycar1990user@hotmail.com" && password === "123456")
        return data
    else {
        return ""
    }
}

export const sigUpService = async (data) => {
    const { email, password } = data
    if (email === "nicoycar1990user@hotmail.com" && password === "123456")
        return data
    else {
        return ""
    }
}