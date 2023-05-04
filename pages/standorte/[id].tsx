import { HTTP } from "@/services/http";
import Clinic from "@/ui/pages/Clinics/Clinic";

export default Clinic;

export async function getServerSideProps(context:any) {
  const {params} = context 
  try {
    const response = await HTTP.get(`http://localhost:3000/data/standorte/${params.id}.json`)
    return {props:{clinic:response}}
  } catch (error) {
    return {
      notFound: true,
    }
  }
 
}
