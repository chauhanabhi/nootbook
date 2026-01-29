
export async function login(authDetail) {
    const url = `${import.meta.env.VITE_API_URL}/login`;
    const requestOpt = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail),
    }
    
        const res = await fetch(url, requestOpt);
        const data = await res.json();

        if (!res.ok) {
            toast.error(data.message || "Login failed");
            return;
        }

        // ✅ SAVE AUTH DATA
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        window.dispatchEvent(new Event("storage")); // 👈 ADD THIS LIN

}

// Register page

export async function register(authDetail){
     const url = `${import.meta.env.VITE_API_URL}/register`;
    const requestOpt = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail),
      }
      const res = await fetch(url,requestOpt);
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }
      // ✅ success
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.dispatchEvent(new Event("storage")); // 👈 ADD THIS LINE

}
// Logout
export function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
}