
import {AspectRatio} from "@chakra-ui/react"
export default function Videos({url,title}){
    return <div>
        <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title={title}
          src={url}
          allowFullScreen
        />
      </AspectRatio>
    </div>
}