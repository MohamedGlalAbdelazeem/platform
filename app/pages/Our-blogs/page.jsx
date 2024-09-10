'use client'
import { FaHeart } from "react-icons/fa";
import RelatedBlogs from "./RelatedBlogs";

function Page() {
 
  return (
    <div className="container mx-auto px-16 py-8">
      <div className="flex flex-row-reverse justify-around flex-wrap mt-6">
        <h1 className='text-2xl font-bold'>Medical InsightThe Latest Advances in Cardiac Cares & Articles</h1>
        <div className='my-6 bg-gray-200 w-full h-96 rounded-3xl'>
        </div>
        <div className="w-full flex gap-4 flex-wrap items-center justify-between">
            <div className="flex flex-wrap gap-6">
               <button className="bg-slate-600 text-white py-1 rounded-2xl w-[130px]">Category</button>    
               <button className="bg-slate-600 text-white  px-1 py-1 rounded-2xl w-[150px]">Sub Category</button>    
            </div> 
            <div>
              <FaHeart className="bg-slate-300 p-2 text-4xl rounded-full " />
            </div>
        </div>
        <div>
            <div className="mt-20">
                <h1 className="font-bold text-lg my-2">Introduction:</h1>
                <p>Cardiac care has seen tremendous advances over the past decade, thanks to innovations in technology and research. From minimally invasive procedures to improved diagnostic tools, the field of cardiology continues to evolve, offering better outcomes for patients.</p>
            </div>
            <div className="mt-9">
                <h1 className="font-bold text-lg my-2">Main Body:</h1>
                <p className="leading-8"> 
                One of the most notable advancements in cardiac care is the development of transcatheter aortic valve replacement (TAVR), a minimally invasive procedure used to treat patients with aortic valve disease. Unlike traditional open-heart surgery, TAVR allows for quicker recovery times and is suitable for patients who are considered high-risk for surgery.
                Additionally, the use of wearable heart monitors has revolutionized how doctors diagnose and monitor heart conditions. Devices like Holter monitors and wearable ECGs provide real-time data, allowing for earlier intervention and better management of conditions such as arrhythmias.
                </p>
            </div>
            <div className="mt-9">
                <h1 className="font-bold text-lg my-2">Conclusion:</h1>
                <p className="leading-8"> 
                As technology continues to evolve, the future of cardiac care looks promising. Innovations like artificial intelligence in diagnostics and improved surgical techniques will likely lead to even better patient outcomes. Staying informed on these advancements is crucial for healthcare professionals working in cardiology.
                 </p>
            </div>
        </div>
      </div> 
      <RelatedBlogs/>
    </div>
  );
}

export default Page;
