import Feeds from './feeds.jsx'
import Stories from './stories.jsx'

export default function CenterBar(){
    return(
        <div className="flex flex-col gap-6">
            <Stories />
            <Feeds />
        </div>
    )
}