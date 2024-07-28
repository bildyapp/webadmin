import { fetchDeliveryNotes, fetchDeliveryNote } from '@/app/lib/data'; 
import DeliveryNoteChart from '@/app/ui/dashboard/delivery-note-chart';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  const deliveryNotes = await fetchDeliveryNotes();
  //console.log("Albaranes:", deliveryNotes)
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Albaranes
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <DeliveryNoteChart deliveryNotes={deliveryNotes}  />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */ }
      </div>
    </main>
  )
}