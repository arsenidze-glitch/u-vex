import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { RatesTable } from '@/components/rates-table'
import { Advantages } from '@/components/advantages'
import { OnlineRequest } from '@/components/online-request'
import { Branches } from '@/components/branches'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <RatesTable />
        <Advantages />
        <OnlineRequest />
        <Branches />
      </main>
      <SiteFooter />
    </>
  )
}
