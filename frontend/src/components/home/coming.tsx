import { Label } from "../ui/label"

export const Coming = () => {
  return (
    <div className="flex-1 flex px-24 gap-8">
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <Label className="text-2xl">Page UI is a set of landing page components & templates that you can copy & paste into you codebase. Made for React & built on top of TailwindCSS.</Label>
        </div>
        <div className="flex-2 gap-4">
          <Label className="text-lg">Sneak peek: Our upcoming product launch!</Label>
        </div>
      </div>
      <div className="flex-1">
        <img src="https://cdn.dribbble.com/userupload/9341516/file/original-5c90e4bae90e9c42dcf2aaf0b71e03cd.png?resize=2048x1536&vertical=center" />
      </div>
      <div className="flex-1 flex flex-col text-xl gap-4">
        <div className="flex items-center">
          <div className="mr-2">🔍</div>
          <div>Discover</div>
        </div>
        <div className="flex items-center">
          <div className="mr-2">🕵️</div>
          <div>Logging</div>
        </div>
        <div className="flex items-center">
          <div className="mr-2">🥃</div>
          <div>And More</div>
        </div>
      </div>
    </div>
  )
}