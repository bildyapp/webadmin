import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { DeliveryNote } from '@/app/lib/definitions';
import { cookies } from 'next/headers';

export default async function DeliveryNoteChart({
  deliveryNotes,
}: {
    deliveryNotes: DeliveryNote[];
}) {
  const cookieStore = cookies()
  const token = cookieStore.get('bytoken')
  if (!token || !token.value) {
    console.error("Token no disponible");
    return;
  }
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Listado de albaranes
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {deliveryNotes.map((deliveryNote, i) => {
            return (
              <div
                key={deliveryNote._id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {deliveryNote.internalProjectCode}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {deliveryNote.description}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {deliveryNote.format == 'hours'? `horas: ${deliveryNote.hours}` : `material: ${deliveryNote.material}`}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {deliveryNote.workdate}
                </p>
                <a href={`http://localhost:8000/api/deliverynote/pdfweb/${deliveryNote._id}?token=${encodeURIComponent(token.value)}`} target="_blank" rel="noopener noreferrer">
                Descargar PDF
              </a>
              </div>
            );
          })}
        </div> 
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Actualizado</h3>
        </div>
      </div>
    </div>
  );
}
