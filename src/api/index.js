import request from "../utils/fetch";

export const SignIn = (body) => request.post("/SYSMAN/login", body);

// export const signIn = (formData) => request.post("/SYSMAN/login", formData);

export const GetClientKey = (body) => request.post("/SYSMAN/client", body);
