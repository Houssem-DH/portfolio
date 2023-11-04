import Image from 'next/image'
import { connect } from "@/dbConfig/dbConfig"
connect()

export default function Home() {
  return (
    <main >
<h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>

    </main>
  )
}
