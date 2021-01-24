import Main from "components/main"
import ReactMenu from "components/main/react-menu"

export default function Home() {
    return (
        <Main>
            <ReactMenu showCloseButton={false} style={{ zIndex: 0 }} />
        </Main>
    )
}
