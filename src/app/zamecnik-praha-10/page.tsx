import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('10')

export default function Praha10Page() {
  return <PrahaPageContent num="10" />
}
