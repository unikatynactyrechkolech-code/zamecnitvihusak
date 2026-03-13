import type { Metadata } from 'next'
import PrahaPageContent, { generatePrahaMetadata } from '@/components/PrahaPageContent'

export const metadata: Metadata = generatePrahaMetadata('4')

export default function Praha4Page() {
  return <PrahaPageContent num="4" />
}
