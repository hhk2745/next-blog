import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('../../components/Editor'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

export default function Home() {
  return <QuillNoSSRWrapper />
}