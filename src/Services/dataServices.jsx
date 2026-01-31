function getSession() {
    const token = sessionStorage.getItem("token");
    const userId = JSON.parse(sessionStorage.getItem("id"));
    return { token, userId };
    
}


// //////////////get User
export async function getUser() {
    const browsData = getSession();
 
    const url = `${import.meta.env.VITE_API_URL}/users/${browsData.userId}`;
   
    console.log(url);
    
    const requestOpt = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browsData.token}` }
    }
    const response = await fetch(url, requestOpt);
    const data = await response.json();
    return data
}
// //////////////get User Order
export async function getUserOrder() {
    const browsData = getSession();
    const url = `${import.meta.env.VITE_API_URL}/orders?user.id=${browsData.userId}`;
    console.log(url);
    
    const requestOption = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browsData.token}` }
    }
    const response = await fetch(url, requestOption);
    const data = await response.json();
    return data;
}
// ///////////////create Order
export async function createOrder(total, cartList, user) {
    const browsData = getSession();
    const token = sessionStorage.getItem("browsData.token")
    const url = `${import.meta.env.VITE_API_URL}/orders`;
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const reqestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    }
    const response = await fetch(url, reqestOption);
    const data = await response.json();
    return data;
}