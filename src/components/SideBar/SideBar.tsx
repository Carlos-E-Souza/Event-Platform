import { gql, useQuery } from "@apollo/client"
import Lesson from "./Lesson"
import "./SideBar.css"

const GET_LESSONS_QUERY = gql`
    query MyQuery {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            availableAt
            id
            lessonType
            slug
            title
        }
    }
`

interface lessonInterface {
    id: string
    title: string
    lessonType: "live" | "class"
    slug: string
    availableAt: string
}

export const SideBar = () => {
    const { data } = useQuery<{ lessons: lessonInterface[] }>(GET_LESSONS_QUERY)

    return (
        <aside className="sidebar">
            <span className="sidebar-title">Lessons Schedule</span>
            <div className="sidebar-lessons">
                {data?.lessons.map((lesson) => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            availableAt={new Date(lesson.availableAt)}
                            slug={lesson.slug}
                            type={lesson.lessonType}
                        />
                    )
                })}
            </div>
        </aside>
    )
}
