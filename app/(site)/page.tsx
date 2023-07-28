import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div> 
    <h1 className="text-6xl font-bold">Hello I&apos;m <span className=" bg-gradient-to-tr from-blue-600 to-green-300 bg-clip-text text-transparent">Mauro!</span></h1>
    <p className="mt-3 text-xl text-gray-500"> Thanks you for visitng my site here are a few projects I have been working on:</p>
    
    <h2 className=" mt-24 font-bold text-gray-700 text-3xl">My Work</h2>

    <div className=" mt-5  grid md:grid-cols-2 lg:grid-cols-3 gap-8">

   
    {projects.map((project)=>(
   <Link href={`/projects/${project.slug}`} className=" border border-gray-500 rounded-lg p-3 hover:scale-105 transition" key={project._id}>
    {project.image &&(
      <Image
      src={project.image}
      alt={project.alt}
      width = {750}
      height = {300}
      className= "object-cover rounded-lg border border-gray-500" />
    )}
    <div className=" mt-2 font-extrabold ">
      {project.name}
      {project.alt}
      </div>
     </Link>
   ))    
    }
     </div>
   </div>
  )
}
