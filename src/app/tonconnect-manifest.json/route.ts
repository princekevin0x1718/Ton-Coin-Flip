import config from "@/config"

export function GET() {
  return Response.json({
    url: config.NEXT_PUBLIC_APP_URL,
    name: "Otton Coinflip",
    iconUrl: config.NEXT_PUBLIC_APP_URL + "/tonconnect-manifest-icon.png",
  })
}
