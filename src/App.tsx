import { gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo"

import "./App.css"

const GET_LESSONS_QUERY = gql`
    query {
        lessons {
            id
            title
            lessonType
        }
    }`

interface lessonInterface {
    id: string
    title: string
    lessonType: string
}

function App() {
    const { data } = useQuery<{ lessons: lessonInterface[] }>(GET_LESSONS_QUERY)

    return (
        <ul>
            {data?.lessons.map((lesson) => {
                return (
                    <li key={lesson.id}>
                        <h1>{lesson.title}</h1>
                        <span>{lesson.lessonType}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default App
