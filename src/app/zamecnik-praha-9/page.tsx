import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('9')

export default function Praha9Page() {
  return <PrahaPageContent num="9" />
}
