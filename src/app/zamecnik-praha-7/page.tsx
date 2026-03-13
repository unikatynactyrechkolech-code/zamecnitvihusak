import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('7')

export default function Praha7Page() {
  return <PrahaPageContent num="7" />
}
