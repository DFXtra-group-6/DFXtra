import axios from "axios";

const logout = () => {
    localStorage.removeItem(`user`);
};

const authService = {
    logout,
}

export default authService;