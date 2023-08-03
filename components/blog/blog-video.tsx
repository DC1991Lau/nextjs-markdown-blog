import { FC } from "react"

interface VideoProps {
  id: string
}

const Video: FC<VideoProps> = ({ id }) => {
  return (
    <div className="aspect-h-9 aspect-w-16 my-4">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  )
}

export default Video
