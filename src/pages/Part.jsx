import { useGet } from "../hooks/useApi";
import { useParams } from "react-router-dom";
import { DetailItem } from "../components/addetails/Details";

function Part() {
   const {id} = useParams()

   const { data, isFetched, isLoading, isError, error } = useGet(
       ["parts"],
       "parts",
       {
         staleTime: 5 * 60 * 1000,
         select : (data) => data.find(e =>e.post_id == id )
       }
     );

     console.log(data);

     return (
       <>
         <div className="flex flex-col gap-y-1">
           <div className="flex flex-col md:flex-row gap-3 mb-8">
             <p className="font-medium text-gray-700 min-w-[120px]">
               الرقم التسلسلي :
             </p>
             <p className="text-gray-600 max-w-5xl text-justify leading-relaxed">
               {data?.id}
             </p>
           </div>

           <div className="flex flex-col md:flex-row gap-3 mb-8">
             <p className="font-medium text-gray-700 min-w-[120px]">
               العنوان :
             </p>
             <p className="text-gray-600 max-w-5xl text-justify leading-relaxed">
               {data?.title}
             </p>
           </div>

           <div className="flex flex-col md:flex-row gap-3 mb-8">
             <p className="font-medium text-gray-700 min-w-[120px]">
               التفاصيل :
             </p>
             <p className="text-gray-600 max-w-5xl text-justify leading-relaxed">
               {data?.description}
             </p>
           </div>
           <div className="flex justify-center items-center mt-4">
             <img
               src={`https://phplaravel-1483035-5810347.cloudwaysapps.com/storage/${data?.image}`}
               alt="no photo"
               className="w-100 h-100"
             />
           </div>
         </div>

         {/* <DetailItem label={t("name")} value={normalized?.name} /> */}
       </>
     );
}


export default Part
