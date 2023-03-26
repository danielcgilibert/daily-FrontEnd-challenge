import { items } from '@/db/data'

export async function GET(request: Request) {
  return new Response(JSON.stringify(items), { status: 200 })
}
