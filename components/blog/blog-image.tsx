import NextImage from "next/image"

type Props = {
  src: string
  alt: string
  priority?: boolean
}

export default function CustomImage({ alt, src, priority = false }: Props) {
  return (
    <div className="h-full w-full">
      <NextImage
        className="mx-auto rounded-lg"
        alt={alt}
        src={src}
        width={650}
        height={650}
        priority={priority}
      />
    </div>
  )
}
