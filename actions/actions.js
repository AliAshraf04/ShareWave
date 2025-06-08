"use server"
import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
function isInvalidText(text) {
  return !text || text.trim()==='';
}
export async function createPost(prevState,formData) {
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');
    
    if (
      isInvalidText(title) ||
      isInvalidText(content)||
      !image||image.size===0
    ){
    return {message: 'All fields are required'};
    }
    let imageUrl;
    try{
       imageUrl= await uploadImage(image);
    }catch(error){
     throw new Error ('Failed to upload image');
    }

     await storePost({
       imageUrl: imageUrl,
       title,
       content,
       userId: 1
     })
     revalidatePath('/feed');
     redirect('/feed');
   
  }

  export async function togglePostLike(postId){
    await updatePostLikeStatus(postId,2)
    revalidatePath('/feed');
  }
   