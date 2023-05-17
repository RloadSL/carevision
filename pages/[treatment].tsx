import { HTTP } from "@/services/http";
import Treatment from "@/ui/pages/Treatments/Treatment";

export default Treatment;

export async function getServerSideProps(context:any) {
  const {params} = context 
  try {
    const response = await HTTP.get(`https://carevision.vercel.app/data/treatments.json`)
    return {props:{treatment:response}}
  } catch (error) {
    return {
      notFound: true,
    }
  }
 
}
