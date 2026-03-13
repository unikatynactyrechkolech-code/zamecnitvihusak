import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('6')

export default function Praha6Page() {
  return <PrahaPageContent num="6" />
}
