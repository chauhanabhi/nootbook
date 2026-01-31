
export async function login(authDetail) {
  const url = `${import.meta.env.VITE_API_URL}/signin`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  });

  const data = await response.json();

  // 🔴 THIS WAS MISSING
  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  // ✅ SUCCESS PATH ONLY
  sessionStorage.setItem("token", data.accessToken);
  sessionStorage.setItem("id", data.user.id);

  // notify Header
  window.dispatchEvent(new Event("storage"));

  return data;
}


       
   

// Register page

export async function register(authDetail){
     const url = `${import.meta.env.VITE_API_URL}/register`;
    const requestOpt = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail),
      }
      const response = await fetch(url,requestOpt);
      const data = await response.json();
      
      // ❌ login failed
  if (!response.ok) {
    throw new Error(data.message || "Invalid email or password");
  }
       // ✅ login success
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("id", JSON.stringify(data.user.id))
      }

      return data;

}
// Logout
export function logout() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
}