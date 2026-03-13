import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('2')

export default function Praha2Page() {
  return <PrahaPageContent num="2" />
}
