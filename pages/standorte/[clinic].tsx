import { HTTP } from "@/services/http";
import Clinic from "@/ui/pages/Clinics/Clinic";

export default Clinic;

export async function getServerSideProps(context:any) {
  const {params} = context 
  try {
    const response = await HTTP.get(`https://carevision.vercel.app/data/standorte/standorte.json`)
    return {props:{clinic:response}}
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
