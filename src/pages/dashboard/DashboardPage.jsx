import { useTitle } from "../../hooks/useTitle";
import {DashpoardEmpaty} from "./components/DashpoardEmpaty"
import {DashboardCard} from "./components/DashboardCard"
import { useEffect, useState } from "react";
import { getUserOrder } from "../../Services";


export const DashboardPage = ({title}) => {
  useTitle(title)
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token")


  useEffect(() => {
    async function fetchUseer() {
     const data =  await getUserOrder();
     setOrders(data);
     console.log(data);
     
    }
    fetchUseer();
  },[])


  return (
     <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
      {orders.length > 0 &&
        orders.map(order => (
          <DashboardCard key={order.id} order={order} />
        ))
      }
      </section>
      <section>
        {!orders.length && <DashpoardEmpaty/>}
      </section>
    </main>
  )
}
