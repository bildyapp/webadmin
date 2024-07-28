import { fetchClients, fetchClient } from '@/app/lib/data'; 
import ClientChart from '@/app/ui/dashboard/client-chart';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  const customers = await fetchClients();
  //console.log("Clientes:", customers)
  //const customer = await fetchClient();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Clientes
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ClientChart customers={customers}  />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */ }
      </div>
    </main>
  )
}