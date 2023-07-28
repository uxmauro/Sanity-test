import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";


type Props = {
    params: {slug: string}
}

export default async function Page({ params }: Props) {

    const page =  await getPage(params.slug)


    return (
        <div>

           <h1 className="bg-gradient-to-tr from-blue-600 to-green-300 bg-clip-text text-transparent  text-5xl font-extrabold ">
            {page.title}
           </h1>
           <div className=" text-lg text-gray-700 mt-5">
           <PortableText value={page.content}/>
         </div>
        </div>
    )

}