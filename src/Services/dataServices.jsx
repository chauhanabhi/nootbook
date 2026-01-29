function getSession() {
    const token = localStorage.getItem("token")
    const userId = JSON.parse(localStorage.getItem("user"));
    return { token: token, userId: userId };
}

// //////////////get User
export async function getUser() {
    const browsData = getSession();
    const id = browsData.userId?.id;
    if (!id) return;
    const url = `${import.meta.env.VITE_API_URL}/users/${id}`;
   
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
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;
    console.log(userId);
    const url = `${import.meta.env.VITE_API_URL}/orders?user.id=${userId}`;

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
    const token = localStorage.getItem("browsData.token")
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