export async function getProductList(){
   let url = `${import.meta.env.VITE_API_URL}/products`;
         const response = await fetch(url);
         if(!response.ok){
            throw {message : response.statusText, status:response.status};  
         }
         
         const data = await response.json();
       return data;
}
