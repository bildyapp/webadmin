import { fetchProjects, fetchProject } from '@/app/lib/data'; 
import ProjectChart from '@/app/ui/dashboard/project-chart';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  const projects = await fetchProjects();
  //console.log("Proyectos:", projects)
  //const customer = await fetchClient();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Proyectos
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProjectChart projects={projects}  />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */ }
      </div>
    </main>
  )
}