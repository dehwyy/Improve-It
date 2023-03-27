export default async function postFetcher(route: string, { arg: body }: { arg: Record<string, unknown> }) {
  await fetch(route, {
    method: 'POST',
    body: JSON.stringify({
      ...body,
    }),
  })
}
