import { gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"

import "./App.css"

export function App() {
    return <Event />
}
