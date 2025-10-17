import {create} from 'zustand';

export const useAuthStore = create((set) => 
({
    email: "" ,
    password: "",
    isLoggedIn: false,


    // Actions
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),

    login: (email,password) => {
        if (email === "admin" && password === "admin"){
            set({isLoggedIn: true});
            return "studentdashboard";
        } else if (email === "admins" && password === "admins"){
            set({isLoggedIn: true});
            return "testdashboard";
        } else {
            alert ("Invalid Credentials!");
            return null;
        }
    },
    logout: () => set({isLoggedIn: false , email: "" , password: ""}),
})
);