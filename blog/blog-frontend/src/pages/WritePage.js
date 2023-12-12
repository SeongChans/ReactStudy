import Responsive from "../componenets/common/Responsive";
import EditorContainer from "../containers/wirte/EditorContainer";
import TagBoxContainer from "../containers/wirte/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/wirte/WriteActionButtoonsContainer";


const WritePage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    )
}

export default WritePage;