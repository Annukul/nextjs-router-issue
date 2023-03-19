import { Protected } from "@/src/protected";

export default function Home() {

  return (
    <Protected>
      <h1>Home</h1>
    </Protected>
  )
}
