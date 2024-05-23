import { QueryClient } from "react-query"
import { dispatchAddNotification } from "../../features/toaster/toasterDispatcher"

const uuids: string[] = []

export function sse(uuid: string, queryClient: QueryClient) {    
    if (uuids.includes(uuid)) {
        console.log("return")
        return
    }
    
    uuids.push(uuid)

    const eventSource = new EventSource(`${import.meta.env.VITE_API}/order/sse/${uuid}`)

    eventSource.addEventListener('message', (event) => {
        const data = JSON.parse(event.data)

        if (data.status === "OPEN") {
            queryClient.refetchQueries({ queryKey: ['ordersOpened'] })
            queryClient.refetchQueries({ queryKey: ['userAccount'] })
        }

        if (data.status === "FILLED") {
            queryClient.refetchQueries({ queryKey: ['ordersOpened'] })
            queryClient.refetchQueries({ queryKey: ['userAccount'] })
            eventSource.close()
            dispatchAddNotification({
                subtitle: `Ordem ${uuid} executada`,
                text: `Status: ${data.status}`,
                subtext: "",
                toasterStyle: { type: "success" },
                active: true,
            })
        }

        if (["NOFUNDS", "ERROR"].includes(data.status)) {
            eventSource.close()
            dispatchAddNotification({
                subtitle: `Ordem ${uuid}`,
                text: `Status: ${data.status}`,
                subtext: "",
                toasterStyle: { type: "alert" },
                active: true,
            })
        }
    })

    eventSource.addEventListener('error', (error) => console.log(error))
}