

//COMPONENTS
import { LoadingDot, LoadingText } from '../assets/styles/loading';

const Loading = () => {

    return (
        <LoadingText>
            Loading
            <LoadingDot>.</LoadingDot>
            <LoadingDot>.</LoadingDot>
            <LoadingDot>.</LoadingDot>
        </LoadingText>
    )
}

export default Loading;