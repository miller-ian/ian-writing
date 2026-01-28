import Image from 'next/image'

export const dynamic = 'force-static'
export const revalidate = false

export default function HomePage() {
  return (
    <div className="max-w-[70ch] mx-auto">
      <div className="rounded-sm overflow-hidden border border-zinc-950">
        <Image
          src="/home-hero.png"
          alt="Illustration of a person writing with a city skyline in the distance"
          width={1024}
          height={576}
          priority
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}
