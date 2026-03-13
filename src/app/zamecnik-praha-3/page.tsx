import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('3')

export default function Praha3Page() {
  return <PrahaPageContent num="3" />
}
