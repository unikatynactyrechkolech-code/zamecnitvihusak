import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('1')

export default function Praha1Page() {
  return <PrahaPageContent num="1" />
}
