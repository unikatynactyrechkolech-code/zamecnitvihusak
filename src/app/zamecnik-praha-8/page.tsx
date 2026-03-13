import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('8')

export default function Praha8Page() {
  return <PrahaPageContent num="8" />
}
